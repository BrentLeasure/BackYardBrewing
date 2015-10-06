angular.module("indexModule")
	.controller("homePageController", ["$scope", function($scope){
		$scope.weekState = true;
		$scope.monthState = false;

		$scope.activateTab = function(buttonClicked){
			if(buttonClicked == 1){
				$scope.weekState = true;
				$scope.monthState = false;
			}else if(buttonClicked == 2){
				$scope.weekState = false;
				$scope.monthState = true;
			}
		}

	}]);