//setting the 
angular.module("indexModule", ["ui.bootstrap"]);


angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", "NightModeFactory", function($scope, $window, $interval, NightModeFactory){
		$scope.NightMode = NightModeFactory;
		$scope.activateNightMode = function(){
			$scope.NightMode.activateNightMode($scope);
		}
	}]);
		

