var recipeModel = require("../models/recipes");

//grabs recipes based on the selected category
getRecipes = function(req, res){
	recipeModel.userRecipe.find({selectedCategory: req.params.beerAlias}, function(err, recipes){
		res.send(recipes);
	})
}

//MULTIPLE RECIPE
getUserRecipes = function(req, res){
	recipeModel.userRecipe.find({userID: req.params._id}, function(err, userRecipes){
		if(err){
			res.send(err);
		}else{
			res.send(userRecipes);
		}
	})
}
//SINGLE RECIPE
getUserRecipe = function(req, res){
	recipeModel.userRecipe.findOne({_id: req.params._id}, function(err, userRecipe){
		if(err){
			res.send(err);
		}else if(!userRecipe){
			res.send("No Recipe");
		}else{
			res.send(userRecipe);
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

//updateRecipe
updateRecipe = function(req, res){
	if(req.user){
		recipeModel.userRecipe.update({_id: req.body._id}, req.body, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		});

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
	getUserRecipe 	: getUserRecipe,
	getAllBeerTypes : getAllBeerTypes,
	createRecipe  	: createRecipe,
	updateRecipe	: updateRecipe,
	deleteRecipe  	: deleteRecipe,
}