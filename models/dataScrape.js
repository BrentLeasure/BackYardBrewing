var mongoose = require("mongoose");

var festivalSchema = mongoose.Schema({
	title		: {type	:   String},
	link		: {type	:   String},
	date		: {type	:   String},
	location	: {type	:   String},
})

module.exports = {
	festivals	   : mongoose.model("festivals", festivalSchema),
}