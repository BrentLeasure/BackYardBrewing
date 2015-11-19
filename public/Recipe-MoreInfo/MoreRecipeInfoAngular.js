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
						console.log(returnData.data);
						$scope.recipe = returnData.data;
					}
				})
		}
		$scope.setRecipeInfo();
}])