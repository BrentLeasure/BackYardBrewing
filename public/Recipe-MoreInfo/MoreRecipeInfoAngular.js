angular.module("indexModule")
	.controller("RecipeInfoController", ["$scope", "$http", "$cookies", function($scope, $http, $cookies){
		$scope.recipeInfo;
		$scope.setRecipeInfo = function(){
				$scope.recipeID = $cookies.get("recipeID");
				$http.get("/getuserrecipe/" + $scope.recipeID)
				.then( function(returnData){
					if(returnData.data.err){
						console.log("there was an error");
						$scope.err = returnData.data.err;
					}else{
						$scope.recipe = returnData.data;
					}
				})
		}
		$scope.setRecipeInfo();
		$scope.addToFavorites = function(recipe){
			$scope.recipeTemp = recipe;
			$http.post("/addFavoriteRecipe", recipe)
			.then(function(returnData){
				if(returnData.data.err){
					$scope.err = returnData.data.err;
					console.log(returnData.data.err);
				}else{
					$scope.success = returnData.data;
					console.log("success!");
				}
			})
		}
}])