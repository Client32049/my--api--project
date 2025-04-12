const mongoose = require("mongoose");

// Define the category schema
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Category model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel
;
