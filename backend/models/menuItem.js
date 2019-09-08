const mongoose = require("mongoose");
const menuItemSchema = mongoose.Schema({
	menuItemId:String,
	itemName:String,
	ingredients:Boolean,
	price:Number,
	kitchenId:String
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
