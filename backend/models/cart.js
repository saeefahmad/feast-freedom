const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
    username:String,
    menuItemId:[String]
});
module.exports = mongoose.model("cart", cartSchema);
