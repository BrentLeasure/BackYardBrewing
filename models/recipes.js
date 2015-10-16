var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BackYardBrewing");

var recipeSchema = mongoose.Schema({
	alias            : {type : String},
	selectedCategory : {type : String},
	description      : {type : String},
	instructions     : {type : String},
});



module.exports = {
	Recipe : mongoose.model("Recipe", recipeSchema),
}