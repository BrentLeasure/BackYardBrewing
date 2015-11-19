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
		var sendBackError = {err: false};
		var nullVariable;
		var body = req.body
		var nullVar = false;
		var counter = 0;
	if(req.user){
		//checks if any
		for(variable in body){
			if(body[variable] === null){
				nullVariable = variable;
				nullVar = true;
				break;
			}
			if(variable == "instructions"){
				if(body[variable].length < 500){
					sendBackError = {err: true, message: "Your instructions are too short. (you need at least 500 characters)"};
				}
			}
			counter++;
		}
		if(sendBackError.err){
			res.send(sendBackError);
		}
		else if(nullVar || counter < 4){
			sendBackError = {err: true, message: "You cannot leave any of these fields blank"};
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
}

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
		sendBackError = {err: true, message: "You are not logged in."}
		res.send(sendBackError);
	} 
}


//================
// DELETE RECIPE
//===============
deleteRecipe = function(req, res){
	var sendBackError;
	if(req.user){
		recipeModel.userRecipe.remove({_id: req.params.id}, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		})
	}else{
		sendBackError = {err: true, message: "You are not logged in."}	
		res.send(sendBackError);
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