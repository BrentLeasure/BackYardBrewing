var recipeModel = require("../models/recipes");

module.exports = {
	createRecipe : function(req, res){
		new recipeModel.Recipe(req.body);
	}

	getRecipes : function(req, res){
		//the res.send is used to send whatever data 
		//is being called in the parenthesis 
		res.send(recipeMode.allRecipes)
	}
}