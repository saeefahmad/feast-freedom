const mongoose = require("mongoose");
const kitchenSchema = mongoose.Schema({
	serviceProviderId:String,
	workingDays:[Number],
	openTime:Number,
	closeTime:Number,
	menueitems:[String]
});
module.exports = mongoose.model("Kitchen", kitchenSchema);
