//setting the 
angular.module("indexModule", ["ui.bootstrap"]);


angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", function($scope, $window, $interval){
		
	}])
	.controller("bodyController", ["NightModeFactory", function( NightModeFactory){
		console.log('BODY CONT')
		
		this.NightMode = NightModeFactory;
		
		this.activateNightMode = function(){
			console.log('!')
			this.NightMode.activateNightMode(this);
		}
		this.stuff="this stuff"
		
	}]);

