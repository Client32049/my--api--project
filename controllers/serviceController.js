const ServiceModel = require("../model/ServiceModel");
const ServicePrice = require("../model/ServicePrice");

const createService = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, type, priceOptions } = req.body;

    // Validate input
    if (!categoryId || !name || !type || !priceOptions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const service = new ServiceModel({ categoryId, name, type, priceOptions });
    await service.save();
    res.status(201).json(service); // Use 201 for resource creation
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getService = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Validate input
    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const services = await ServiceModel.find({ categoryId }).populate("priceOptions");
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createService,
  getService,
};