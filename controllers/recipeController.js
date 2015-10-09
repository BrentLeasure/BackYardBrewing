var recipeModel = require("../models/recipes");



//Export so you can access methods in app.js

module.exports = {
	createRecipe : function(req, res){
		new recipeModel.Recipe(req.body);
		res.send("Success");
	}
}