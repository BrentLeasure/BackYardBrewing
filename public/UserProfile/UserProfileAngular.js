angular.module("indexModule")
.controller("UserController", ["$scope", "$rootScope","$http", "$cookies", "$window", "authService", "RecipeService", function($scope, $rootScope, $http, $cookies, $window, authService, RecipeService){
	$scope.buttonArray = [true, false, false, false];
	$scope.previousButton = 0;
	authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
				$scope.greeting = "Welcome back" + $scope.user.username + "!";	
				$scope.getUserRecipes();
				$scope.getFavoriteRecipes();
			}else{
				$window.location.href = "/#/"
			}
	})
	$scope.changeActiveButton = function(activeButton){
		$scope.buttonArray[$scope.previousButton] = false;
		$scope.previousButton = activeButton;
		$scope.buttonArray[activeButton] = true;
	}
	$scope.getUserRecipes = function(){
		$http.get("/getuserrecipes/" + $scope.user._id)
		.then(function(returnData){
			if(returnData.data.err){
				$scope.err = returnData.data.err;	
			}else if(returnData.data.length == 0){
				$scope.hasRecipes = false;
			}else{
				$scope.hasRecipes = true;
				$scope.userRecipes = returnData.data;
				
			}
		})
	}
	$scope.getFavoriteRecipes = function(){
		$http.get("/getFavoriteRecipes")
		.then(function(returnData){
			console.log(returnData.data);
			if(returnData.data.err){
				$scope.err = returnData.data.err;
			}else if(returnData.data.length == 0){
				$scope.hasFavorites = false;
			}else{
				$scope.hasFavorites = true;
				$scope.userFavorites = returnData.data;
			}
		})
	}

	$scope.deleteRecipe = function(recipe){
		var deleteIt = confirm("Are you sure you want to delete your recipe?");
		if(deleteIt){
			var theRecipe = recipe;
			$http.delete("/deleterecipe/" + recipe._id)
			.then(function(){
				$window.location.reload();
			})
		}
	}
	$scope.recipeInfo = function(recipeID){
		RecipeService.recipeInfo($scope, $cookies, $window, $rootScope, recipeID);
	}

}]);