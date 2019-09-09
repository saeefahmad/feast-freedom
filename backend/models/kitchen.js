const mongoose = require("mongoose");
const kitchenSchema = mongoose.Schema({
	serviceProviderId:String,
	Id:String,
	name:String,
	workingDays:[Number],
	openTime:Number,
	closeTime:Number
});
module.exports = mongoose.model("Kitchen", kitchenSchema);
