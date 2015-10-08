//setting the 
angular.module("indexModule", ["ui.bootstrap"]);


angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", function($scope, $window, $interval){
		
	}])
	.controller("bodyController", ["NightModeFactory", function( NightModeFactory){
		
		this.NightMode = NightModeFactory;
		
		this.activateNightMode = function(){
			this.NightMode.activateNightMode(this);
		}
		
	}]);

