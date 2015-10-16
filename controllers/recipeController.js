//connects to a specific collection
var recipeModel = require("../models/recipes");

createRecipe = function(req, res){
		var newRecipe = new recipeModel.Recipe(req.body);

		newRecipe.save(function(err, data){
			if(err){
				console.log(err);
			}else{
				res.send(data);
			}	
		})
	},

getRecipes = function(req, res){
	recipeModel.Recipe.find({selectedCategory: req.params.beerAlias}, function(err, recipes){
		res.send(recipes);
	})
}
module.exports = {
	createRecipe : createRecipe,
	getRecipes   : getRecipes,
}