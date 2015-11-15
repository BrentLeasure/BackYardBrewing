var passport = require('passport');
var userModel = require('../models/user');
var recipeModel = require("../models/recipes");


var addFavoriteRecipe = function(req, res){
	if(user){
		recipeModel.userRecipe.findOne({_id: req.body._id}, funciton(err, recipe){
			if(err){
				res.send(err);
			}else{
				userModel.user.update({_id: user._id}, {$push :{favoriteRecipe: recipe}}, function(err){
					if(err){
						res.send(err);
					}else{
						res.send("success!");
					}
				});
			}
		})

	}else{
		res.send("Not logged in")
	}
}

var removeFavoriteRecipe = function(req, res){
	if(user){
		recipeModel.userRecipe.findOne({_id: req.body._id}, funciton(err, recipe){
			if(err){
				res.send(err);
			}else{
				userModel.user.update({_id: user._id}, {$pull :{favoriteRecipe: recipe}}, function(err){
					if(err){
						res.send(err);
					}else{
						res.send("success!");
					}
				});	
			}
		}

	}else{
		res.send("You are not logged in.");
	}
}
//hello!
var getFavoriteRecipes = function(req, res){
	if(user){
		userModel.user.find({_id: req.body._id}, funciton(err, favoriteRecipes)){
			if(err){
				res.send(err);
			}else{
				res.send(favoriteRecipes);
			}
		}
	}else{
		res.send("You are note logged in.");
	}
}
