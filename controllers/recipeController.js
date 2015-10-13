//connects to a specific collection
var recipeModel = require("../models/recipes");

module.exports = {
	createRecipe : function(req, res){
		var newRecipe = new recipeModel.Recipe(req.body);
		newRecipe.save(function(){
			res.send("hello world!");
		})
	},

	getRecipes : function(req, res){
		
	}
}