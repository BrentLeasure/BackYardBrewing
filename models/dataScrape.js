var mongoose = require("mongoose");

var festivalSchema = mongoose.Schema({
	events : {type : Object},
})

module.exports = {
	festivals	   : mongoose.model("festivals", festivalSchema),
}