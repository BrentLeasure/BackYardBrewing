//setting the 
angular.module("titleAndHeaderModule", []);


//getting the module
angular.module("titleAndHeaderModule")
	.controller("titleAndHeaderMainController", ["$scope", "$window", "$interval", function($scope, $window, $interval){

		 $interval(function(){
			if($window.pageYOffset >= 150){
				$scope.state = true;
			}else if($window.pageYOffset < 150){
				$scope.state = false;	
			}
		}, 100);

	}]);
//window.scrolltop