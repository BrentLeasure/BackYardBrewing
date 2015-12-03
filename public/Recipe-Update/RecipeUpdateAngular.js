angular.module("indexModule")
.controller("RecipeUpdateController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){		
		$http.get("/getuserrecipe/" + $routeParams.recipeID)
		.then(function(returnData){
			if(returnData.data.err){
				$scope.err = returnData.data.err;
 			}else{
				$scope.recipe = returnData.data;
			}
		});
		$scope.updateRecipe = function(recipe){
			$http.put("/updateRecipe", recipe)
			.then(function(returnData){
				
			})
		}
}]);