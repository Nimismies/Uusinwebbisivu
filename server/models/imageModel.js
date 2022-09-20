
const mongoose = require("mongoose");

var imgSchema = mongoose.Schema({
    img:{data:Buffer,contentType: String}
});
var image = mongoose.model("image",imgSchema);