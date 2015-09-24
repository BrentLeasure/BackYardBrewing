//setting the 
angular.module("indexModule", []);

angular.module("indexModule")
	.factory("mainFactory", [function(){
		return {}
	}]);

angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", "mainFactory", function($scope, $window, $interval, mainFactory){
		$scope.state = false;
		$interval(function(){
			if($window.pageYOffset >= 190){
				$scope.state = true;
			}else if($window.pageYOffset < 190){
				$scope.state = false;	
			}
		}, 100);
		
	}]);
		

