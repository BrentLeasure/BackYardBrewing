angular.module("indexModule")
.controller("signupController", ["$scope", "$http", "$location", "$timeout", "$window", "authService", function($scope, $http, $location, $timeout, $window, authService){
	$scope.signedUp = false; 
	$scope.createUser = function(){
		$http.post("/auth/signup", $scope.signup)
		.then(function(returnData){
			console.log(returnData);
			if(returnData.data.error){
				console.log(returnData.data.error);
				$scope.err = returnData.data.error;
			}else{
				$scope.signedUp = true;
				$scope.signup = "";
				$scope.err="";
				$timeout(function(){
					$scope.delayedRedirect();
				}, 2000)
			}
		})
	};
	$scope.delayedRedirect = function(){
		// $window.location.reload();
		// $location.path("/");
	}
}]);