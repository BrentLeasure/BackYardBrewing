angular.module("indexModule")
.controller("homePageController", ["$scope", "$uibModal", "authService", function($scope, $uibModal, authService){
		$scope.animationsEnabled = true;
		authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
			}else{
				$scope.user = false;
			}
		});
	
		$scope.openLogin = function (size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'loginModal.html',
				controller: 'loginModal',
				size: size,
				resolve: {
					// beer: function () {
					// 	return [beer, recipes];
					// }
				}
	    	});
    	};
    	$scope.openSignup = function (size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'signupModal.html',
				controller: 'signupModal',
				size: size,
				resolve: {
					// beer: function () {
					// 	return [beer, recipes];
					// }
				}
	    	});
    	};
}])
.controller("loginModal", ["$scope", "$http", "$window", "$uibModalInstance", function($scope, $http, $window, $uibModalInstance){
	$scope.loggingIn = function(){
		$http.post("/auth/login", $scope.login)
		.then(function(returnData){
				if(returnData.data.err){
					$scope.loginError = returnData.data.err;
				}else{
					$scope.user = returnData.data
					$scope.loginError = "";
					$window.location.href = "/#/user/" + $scope.user.username;
					$window.location.reload();
				}
		});
	}
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}])
.controller("signupModal", ["$scope", "$http", "$location", "$timeout", "$window", "$uibModalInstance", "authService", function($scope, $http, $location, $timeout, $window, $uibModalInstance, authService){
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
		$window.location.reload();
		$location.path("/");
	}
		$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}]);