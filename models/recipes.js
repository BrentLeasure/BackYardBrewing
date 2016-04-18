var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BackYardBrewing");

var recipeSchema = mongoose.Schema({
	alias            : {type 	: String},
	selectedCategory : {type 	: String},
	description      : {type 	: String},
	instructions     : {type 	: String},
	userID			 : {type 	: String},
	username		 : {type 	: String},
	image			 : {type    : Object},
});

var beerTypesSchema = mongoose.Schema({
	alias	: {type: String},
	style	: {type: String},
	about	: {type: String},
	taste	: {type: String},
});


module.exports = {
	userRecipe     : mongoose.model("userRecipe", recipeSchema),
	beerTypes 	   : mongoose.model("beerTypes", beerTypesSchema),
}