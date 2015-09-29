//setting the 
angular.module("indexModule", []);


angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", function($scope, $window, $interval){
		//===================
		// ACTIVATE FIXED NAV BAR
		//===================
		$scope.state = false;
		$interval(function(){
			if($window.pageYOffset >= 150){
				$scope.state = true;
			}else if($window.pageYOffset < 150){
				$scope.state = false;	
			}
		}, 100);

	}]);
		

