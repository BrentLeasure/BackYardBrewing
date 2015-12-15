angular.module("indexModule")
	.controller("RecipeInfoController", ["$scope", "$http", "$cookies", function($scope, $http, $cookies){
		$scope.recipeInfo;
		$scope.getRecipeInfo = function(){
				$scope.recipeID = $cookies.get("recipeID");
				$http.get("/getuserrecipe/" + $scope.recipeID)
				.then(function(returnData){
					if(returnData.data.err){
						$scope.err = returnData.data.err;
					}else if(returnData.data == ""){
						$scope.noRecipe = true;
						$scope.notFound = "The recipe you are looking for appears to no longer exist.";
					}else{
						$scope.noRecipe = false;
						$scope.err = "";
						$scope.recipe = returnData.data;
					}
				})
		}
		$scope.getRecipeInfo();
		$scope.addToFavorites = function(recipe){
			$scope.recipeTemp = recipe;
			$http.post("/addFavoriteRecipe", recipe)
			.then(function(returnData){
				if(returnData.data.err){
					$scope.err = returnData.data.err;
				}else{
					$scope.success = returnData.data;
				}
			})
		}
}])