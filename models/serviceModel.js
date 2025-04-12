const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to the Category model
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["basic", "premium", "custom"], // Example types, adjust as needed
    },
    priceOptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ServicePrice", // Reference to the ServicePrice model
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const ServiceModel = mongoose.model("Service", serviceSchema);

module.exports = ServiceModel;
