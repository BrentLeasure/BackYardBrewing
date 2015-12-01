var passport = require('passport');
var userModel = require("../models/user");
var recipeModel = require("../models/recipes");


var addFavoriteRecipe = function(req, res){
	if(req.user){
		userModel.User.update({_id: req.user._id}, {$push :{favoriteRecipes: {name: req.body.alias, _id: req.body._id}}}, function(err){
			if(err){
				res.send(err);
			}else{
				res.send("success!");
			}
		});
	}else{
		var sendBackError = {err: true, message: "You are not logged in."}
		res.send(sendBackError);
	}
}

var removeFavoriteRecipe = function(req, res){
	if(req.user){
		recipeModel.userRecipe.findOne({_id: req.body._id}, function(err, recipe){
			if(err){
				res.send(err);
			}else{
				userModel.User.update({_id: user._id}, {$pull :{favoriteRecipes: {name: recipe.alias, _id: recipe._id}}}, function(err){
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
	if(req.user){
		userModel.User.find({_id: req.user._id}, function(err, user){
			if(err){
				res.send(err);
			}else{
				res.send(user.favoriteRecipes);
			}
		})
	}else{
		var sendBackError = {err: true, message: "You are not logged in."}
		res.send(sendBackError);
	}
}

module.exports = {
	addFavoriteRecipe    : addFavoriteRecipe,
	removeFavoriteRecipe : removeFavoriteRecipe,
	getFavoriteRecipes   : getFavoriteRecipes,
}
