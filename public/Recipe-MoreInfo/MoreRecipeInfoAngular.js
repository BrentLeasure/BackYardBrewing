angular.module("indexModule")
	.controller("RecipeInfoController", ["$scope", "$rootScope", "$http", "$cookies", "$window", "RecipeService", function($scope, $rootScope, $http, $cookies, $window, RecipeService){
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
						console.log(returnData.data);
						$http.get("/getImage/" + $scope.recipe.image).then(function(returnData){
							console.log(returnData);
						})
					}
				})
		}
		$scope.getRecipeInfo();
		$scope.addToFavorites = function(recipe){
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