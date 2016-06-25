angular.module("indexModule")
.controller("RecipeUpdateController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){		
		$http.get("/getuserrecipe/" + $routeParams.recipeID)
		.then(function(returnData){
				$scope.recipe = returnData.data;
			},function(returnData){
				$scope.err = returndData.data.message;
		})
		$scope.updateRecipe = function(recipe){
			$http.put("/updateRecipe", recipe)
			.then(function(returnData){
				$scope.success = "";
			},function(returnData){
				$scope.err = returndData.data.message;
			}
			);
		}
}]);