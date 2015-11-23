var passport = require('passport');
var userModel = require('../models/user');
var recipeModel = require("../models/recipes");


var addFavoriteRecipe = function(req, res){
	if(user){
		recipeModel.userRecipe.findOne({_id: req.body._id}, function(err, recipe){
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
		var sendBackError = {err: true, message: "You are not logged in."}
		res.send(sendBackError);
	}
}

var removeFavoriteRecipe = function(req, res){
	if(user){
		recipeModel.userRecipe.findOne({_id: req.body._id}, function(err, recipe){
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
		})

	}else{
		var sendBackError = {err: true, message: "You are not logged in."}
		res.send(sendBackError);
	}
}
//hello!
var getFavoriteRecipes = function(req, res){
	if(user){
		userModel.user.find({_id: req.body._id}, function(err, favoriteRecipes){
			if(err){
				res.send(err);
			}else{
				res.send(favoriteRecipes);
			}
		})
	}else{
		var sendBackError = {err: true, message: "You are not logged in."}
		res.send(sendBackError);
	}
}
