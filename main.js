//setting the 
angular.module("indexModule", []);


//getting the module
angular.module("indexModule");

//setting the controller
angular.module("indexModule")
	.controller("mainController", ["$scope", "$window", "$interval", function($scope, $window, $interval){
		$scope.state = false;
		$scope.beerTypes = [
		{
			name: "India Pale Ale",
			description: "",
			taste: "",
		},

		{
			name: "Imperial Stout",
			description: "",
			taste: "",
		},

		{
			name: "Rye Lager",
			description: "",
			taste: "",
		},
		
		{
			name: "English Pale Ale",
			description: "",
			taste: "",
		},
		
		{
			name: "Scottish Ale",
			description: "",
			taste: "",
		},

		];
		 $interval(function(){
			if($window.pageYOffset >= 200){
				$scope.state = true;
			}else if($window.pageYOffset < 200){
				$scope.state = false;	
			}
		}, 100);

	}]);
//window.scrolltop