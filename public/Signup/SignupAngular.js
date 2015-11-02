angular.module("indexModule")
.controller("signupController", ["$scope", "$http", "$location", "$timeout", "$window", "authService", function($scope, $http, $location, $timeout, $window, authService){
	$scope.signedUp = false; 
	$scope.createUser = function(){
		$http.post("/auth/signup", $scope.signup)
		.then(function(returnData){
			if(returnData.data.err){
				console.log(returnData.data.err);
				$scope.err = returnData.data.err;
			}else{
				$scope.signedUp = true;
				$scope.signup = "";
				$timeout(function(){
					$scope.delayedRedirect();
				}, 2000)
			}
		})
	};
	$scope.delayedRedirect = function(){
		$window.location.reload();
		$location.path("/");
	}
}]);