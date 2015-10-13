var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BackYardBrewing");

var Recipe = mongoose.model("recipe", {
	alias            : {type : String},
	selectedCategory : {type : String},
	description      : {type : String},
	instructions     : {type : String},
});

module.exports = { 
	Recipe     : Recipe
}