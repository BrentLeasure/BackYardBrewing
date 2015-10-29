var recipeModel = require("../models/recipes");

//grabs recipes based on the selected category
getRecipes = function(req, res){
	recipeModel.userRecipe.find({selectedCategory: req.params.beerAlias}, function(err, recipes){
		res.send(recipes);
	})
}

//grabs all the beertypes
getAllBeerTypes = function(req, res){
	recipeModel.beerTypes.find({}, function(err, beers){
		if(err){
			console.log(err);
		}else{
			res.send(beers);
		}
		
	});
}
createRecipe = function(req, res){
//put an if statement here to check that they are logged in
	var newRecipe = new recipeModel.userRecipe(req.body);

	newRecipe.save(function(err, data){
		if(err){
			console.log(err);
		}else{
			res.send(data);
		}	
	})
},

updateRecipe = function(req, res){
	var beer = req.params;
	for(var prop in beer){
		if(beer[prop] != ""){
			var property = beer[prop];
			recipeModel.userRecipe.update({_id: req.params.id}, {$set: {prop: property}});
		}
	} 
}

//THIS ISN'T FINISHED!!!!
deleteRecipe = function(req, res){
	//Make an if statement in here seeing if they are logged in
	recipeModel.userRecipe.remove({_id: req.params.id}, function(err){
		if(err){
			res.send(err);
		}else{
			res.send("success!");
		}
	})
}

//recipemodel.recipe.remove
module.exports = {
	createRecipe  	: createRecipe,
	getRecipes      : getRecipes,
	deleteRecipe  	: deleteRecipe,
	getAllBeerTypes : getAllBeerTypes,
}