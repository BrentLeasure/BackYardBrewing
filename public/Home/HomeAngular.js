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
	
		$scope.open = function (size) {
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
}]);