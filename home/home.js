angular.module("indexModule")
	.controller("mainController", ["$scope", "$window", "$interval", "mainFactory", function($scope, $window, $interval, mainFactory){
				$scope.state = false;
		$interval(function(){
			if($window.pageYOffset >= 150){
				$scope.state = true;
			}else if($window.pageYOffset < 150){
				$scope.state = false;	
			}
		}, 100);
	}]);