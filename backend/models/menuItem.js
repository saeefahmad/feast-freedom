const mongoose = require("mongoose");
const menuItemSchema = mongoose.Schema({
	itemName:String,
	ingredients:String,
	price:Number,
	kitchenId:String
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
