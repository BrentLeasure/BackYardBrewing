angular.module("indexModule")
	.controller("RecipeInfoController", ["$scope", "$cookies", function($scope, $cookies){
		$scope.recipeInfo;
		$scope.setRecipeInfo = function(){
			if($scope.recipeInfo === undefined){
				$scope.recipeInfo = $cookies.getObject("recipe");

			}
		}
		$scope.setRecipeInfo();
}])