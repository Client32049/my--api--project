
const ServiceModel = require("../models/serviceModel");
const  CategoryModel  = require("../models/categoryModel");
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const category = new CategoryModel({ name });
    await category.save();
    res.status(201).json(category); // Use 201 for resource creation
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const category = await CategoryModel.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Check if the category has associated services
    const services = await ServiceModel.find({ categoryId });
    if (services.length > 0) {
      return res.status(400).json({
        message: "Category contains services. Cannot delete.",
      });
    }

    const category = await CategoryModel.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};