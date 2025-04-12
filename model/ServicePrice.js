const mongoose = require("mongoose");

const servicepriceSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required,
  },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ["Hourly", "Weekly", "Monthly"], required: true },
});

const ServicePriceModel = mongoose.model("ServicePrice", servicepriceSchema);

module.exports = {
  ServicePriceModel
};
