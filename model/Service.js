const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
 categoryId :{
    type : mongoose.Schema.Types.ObjectId, ref : "Category", required :true
 },
 name: { type : String , required :true},
 type : { type : String, enum :["Nurmal", "VIP"], required :true},
 priceOptions :[{ type : mongoose.Schema.Types.ObjectId, ref:"ServicePrice"}],

});

const ServiceModel = mongoose.model("Service", serviceSchema);

module.exports = {
    ServiceModel
};
