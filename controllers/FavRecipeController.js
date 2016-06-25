var passport = require('passport');
var userModel = require("../models/user");
var recipeModel = require("../models/recipes");


var addFavoriteRecipe = function(req, res){
	if(req.user){
		if(req.user.favoriteRecipes.length == 0){
			pushToFavoriteRecipe(req, res);
		}
		else{
			userModel.User.find({favoriteRecipes: {$elemMatch: {_id: req.body._id}}}, function(err, recipe){
				if(recipe.length == 0){
					userModel.User.update({_id: req.user._id}, {$push :{favoriteRecipes: {name: req.body.alias, _id: req.body._id, selectedCategory: req.body.selectedCategory}}}, function(err){
						if(err){
							res.send(err);
						}else{
							res.send("success!");
						}
					});
				}else{
					return res.status(409).send({
						message: "You already added this recipe!"
					});
				}
			});
		}
	}else{
		return res.status(403).send({
			message: "you are not logged in"
		});
	}
}

var removeFavoriteRecipe = function(req, res){
	if(req.user){
		userModel.User.update({_id: req.user._id}, {$pull :{favoriteRecipes: {_id: req.body._id}}}, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		});	
	}else{
		return res.status(403).send({
			message: "you are not logged in"
		});
	}
}
//hello!
var getFavoriteRecipes = function(req, res){
	if(req.user){
		res.send(req.user.favoriteRecipes);
	}else{
		return res.status(403).send({
			message: "you are not logged in"
		});
	}
}


module.exports = {
	addFavoriteRecipe    : addFavoriteRecipe,
	removeFavoriteRecipe : removeFavoriteRecipe,
	getFavoriteRecipes   : getFavoriteRecipes,
}
