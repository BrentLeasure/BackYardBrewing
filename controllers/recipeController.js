var recipeModel = require("../models/recipes");

//grabs recipes based on the selected category
getRecipes = function(req, res){
	recipeModel.userRecipe.find({selectedCategory: req.params.beerAlias}, function(err, recipes){
		res.send(recipes);
	})
}

getUserRecipes = function(req, res){
	recipeModel.userRecipe.find({userID: req.body._id}, function(err, userRecipes){
		if(err){
			res.send(err);
		}else if(userRecipes == null){
			res.send("You don't have any Recipes");
		}else{
			res.send(userRecipes);
		}
	})
}
//grabs all the beertypes
getAllBeerTypes = function(req, res){
	recipeModel.beerTypes.find({}, function(err, beers){
		if(err){
			res.send(err);
		}else{
			res.send(beers);
		}
		
	});
}

//updateRecipe
createRecipe = function(req, res){
	if(req.user){
		var newRecipe = new recipeModel.userRecipe(req.body);

		newRecipe.save(function(err, data){
			if(err){
				res.send(err);
			}else{
				res.send(data);
			}	
		})
	}else{
		res.send("Error: not logged in.");
	}
},

updateRecipe = function(req, res){
	if(req.user){
		var beer = req.params;
		for(var prop in beer){
			if(beer[prop] != ""){
				var property = beer[prop];
				recipeModel.userRecipe.update({_id: req.params.id}, {$set: {prop: property}});
			}
		}
	}else{
		res.send("Error: not logged in.");
	} 
}

//deletes recipes from the model
deleteRecipe = function(req, res){
	if(req.user){
		recipeModel.userRecipe.remove({_id: req.params.id}, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		})
	}else{
		res.send("Error: not logged in.");
	}
}


module.exports = {
	getRecipes      : getRecipes,
	getUserRecipes	: getUserRecipes,
	getAllBeerTypes : getAllBeerTypes,
	createRecipe  	: createRecipe,
	updateRecipe	: updateRecipe,
	deleteRecipe  	: deleteRecipe,
}