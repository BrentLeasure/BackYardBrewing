angular.module("indexModule")
.controller("RecipeUpdateController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){		
		$http.get("/getuserrecipe/" + $routeParams.recipeID)
		.then(function(returnData){
			if(returnData.data.error){
				console.log(returnData.data.error);
				$scope.err = returnData.data.error;
 			}else{
				$scope.recipe = returnData.data;
				console.log($scope.recipe);
			}
		});
		$scope.updateRecipe = function(recipe){
			$http.put("/updateRecipe", recipe)
			.then(function(returnData){
				
			})
		}
}]);