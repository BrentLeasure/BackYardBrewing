var recipeModel = require("../models/recipes");



//================
// GET ALL RECIPES
//================
getRecipes = function(req, res){
	recipeModel.userRecipe.find({selectedCategory: req.params.beerAlias}, function(err, recipes){
		if(err){
			res.send(err);
		}else{
			res.send(recipes);	
		}
		
	})
}


//================
// GET MULTIPLE RECIPES
//===============
getUserRecipes = function(req, res){
	recipeModel.userRecipe.find({userID: req.params._id}, function(err, userRecipes){
		if(err){
			res.send(err);
		}else{
			res.send(userRecipes);
		}
	})
}

//================
// GET SINGLE RECIPE
//===============
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


//================
// GETS BEER TYPES
//===============
getAllBeerTypes = function(req, res){
	recipeModel.beerTypes.find({}, function(err, beers){
		if(err){
			res.send(err);
		}else{
			res.send(beers);
		}
		
	});
}

//===================
//CREATE RECIPE
//===================
createRecipe = function(req, res){
		//creating variables
		var sendBackError = {};
		var nullVariable;
		var body = req.body
		var nullVar = false;
	if(req.user){
		//checks if any
		for(variable in body){
			console.log(variable + " = " + body[variable]);
			if(body[variable] === null){
				nullVariable = variable;
				nullVar = true;
				break;
			}
		}

		if(nullVar){
			sendBackError = {err: true, message: "Don't leave any blanks!"};
			res.send(sendBackError);
		}else{
			var newRecipe = new recipeModel.userRecipe(req.body);
			newRecipe.save(function(err, data){
				if(err){
					res.send(err);
				}else{
					res.send(data);
				}	
			})
		}
	}else{
		sendBackError = {err: true, message: "You are not logged in."};
	}
},

//================
// UPDATE RECIPE
//===============
updateRecipe = function(req, res){
	var sendBackError;
	if(req.user){
		recipeModel.userRecipe.update({_id: req.body._id}, req.body, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		});

	}else{
		sendBackError = {err: true, message: ""}
		res.send("Error: not logged in.");
	} 
}


//================
// DELETE RECIPE
//===============
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