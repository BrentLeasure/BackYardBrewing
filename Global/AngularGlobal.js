//setting the 
angular.module("indexModule", ["ui.bootstrap"]);


angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", function($scope, $window, $interval){
		$scope.nightMode = false;
		$scope.activateNightMode = function(){
			$scope.nightMode = !$scope.nightMode;
		}

	}]);
		

