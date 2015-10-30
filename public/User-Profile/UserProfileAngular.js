angular.module("indexModule")
.controller("UserController", ["$scope", "$http", "authService", function($scope, $http, authService){
	authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
				$scope.greeting = "wellcome back" + $scope.user.username;	
				$scope.getUserRecipes();
			}
	})
	$scope.getUserRecipes = function(){
		$http.get("/getUserRecipes/" + $scope.user._id)
		.then( function(returnData){
			if(returnData.data.err){
				$scope.err = returnData.data.err;	
			}else if(returnData.data){
				$scope.hasRecipes = true;
				$scope.userRecipes = returnData.data;
			}else{
				$scope.hasRecipes = false;
				$scope.noRecipes = "You don't have any recipes";
			}
		})
	}

}]);