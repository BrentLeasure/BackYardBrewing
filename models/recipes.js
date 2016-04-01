var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BackYardBrewing");

var recipeSchema = mongoose.Schema({
	alias            : {type 			: String},
	selectedCategory : {type 			: String},
	description      : {type 			: String},
	instructions     : {type 			: String},
	userID			 : {type 			: String},
	username		 : {type 			: String},
	image			 : [{fieldname		: String,
    					 originalname	: String,
    					 encoding		: String,
    					 mimetype		: String,
    					 destination	: String,
    					 filename		: String,
    					 path			: String,
    					 size			: String,
     					}]
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