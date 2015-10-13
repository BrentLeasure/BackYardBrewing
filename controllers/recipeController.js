//connects to a specific collection
var recipeModel = require("../models/recipes");

module.exports = {
	createRecipe : function(req, res){
		var newRecipe = new recipeModel.Recipe(req.body);
		newRecipe.save(function(err, data){
			res.send(data);
		})
	},

	getRecipes : function(req, res){
		
	}
}