angular.module("indexModule")
	.controller("homePageController", ["$scope", function($scope){
		$scope.weekState = true;
		$scope.monthState = false;

		$scope.activateTab = function(){
			$scope.weekState = !$scope.weekState;
			$scope.monthState = !$scope.monthState;
		}

	}]);