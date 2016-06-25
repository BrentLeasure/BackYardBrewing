var recipeModel = require("../models/recipes");



//================
// GET ALL RECIPES IN SELECTED CATEGORY
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
			return res.status(404).send({
				message: "The recipe you are looking for is not here."
			});
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
		var nullVariable;
		var body = req.body
		var nullVar = false;
		var counter = 0;
	if(req.file === undefined){
		return res.status(400).send({
   			message: "You need to include a picture!"
		});
	}else{
		req.body.image = req.file;
	}
	if(req.user){
		//checks if any variables are null
		for(variable in body){
			if(body[variable] === null){
				nullVariable = variable;
				nullVar = true;
				break;
			}
			if(variable == "instructions"){
				if(body[variable].length < 500){
					return res.status(400).send({
   						message: "Your instructions are too short. (you need at least 500 characters)"
					});
				}
			}
			counter++;
		}
		if(nullVar || counter < 4){
			return res.status(400).send({
				message: "You cannot leave any of these fields blank"
			});
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
		return res.status(403).send({
			message: "you are not logged in"
		});
	}
}

//================
// UPDATE RECIPE
//===============
updateRecipe = function(req, res){
	var err;
	if(req.user){
		recipeModel.userRecipe.update({_id: req.body._id}, req.body, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		});

	}else{
		return res.status(400).send({
			message: "you are not logged in"
		});
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
		return res.status(400).send({
			message: "you are not logged in"
		});
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