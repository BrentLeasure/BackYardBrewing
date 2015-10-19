//connects to a specific collection
var recipeModel = require("../models/recipes");

//grabs all recipes based on the category
getRecipes = function(req, res){
	recipeModel.Recipe.find({selectedCategory: req.params.beerAlias}, function(err, recipes){
		res.send(recipes);
	})
}
createRecipe = function(req, res){
//put an if statement here to check that they are logged in
	var newRecipe = new recipeModel.Recipe(req.body);

	newRecipe.save(function(err, data){
		if(err){
			console.log(err);
		}else{
			res.send(data);
		}	
	})
},

//THIS ISN'T FINISHED!!!!
deleteRecipe = function(req, res){
	//Make an if statement in here seeing if they are logged in
	recipeModel.Recipe.remove({_id: req.params.id})
}

//recipemodel.recipe.remove
module.exports = {
	createRecipe : createRecipe,
	getRecipes   : getRecipes,
	deleteRecipe : deleteRecipe,
}