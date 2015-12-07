angular.module("indexModule")
.controller("homePageController", ["$scope", "$http", "authService", function($scope, $http, authService){
	authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
			}else{
				$scope.user=false;
			}
		});
		$scope.loggingIn = function(){
			$http.post("/auth/login", $scope.login)
			.then(function(returnData){
					if(returnData.data.err){
						$scope.loginError = returnData.data.err;
					}else{
						$scope.user = returnData.data
						$scope.loginError = "";
					}
			});
		}
}])