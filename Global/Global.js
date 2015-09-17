//setting the 
angular.module("indexModule", []);



//setting the controller
angular.module("indexModule")
	.controller("mainController", ["$scope", "$window", "$interval", function($scope, $window, $interval){


	}]);

angular.module("indexModule")
	.controller("headerController", ["$scope", "$window", "$interval", function($scope, $window, $interval){
		$scope.state = false;

		 $interval(function(){
			if($window.pageYOffset >= 150){
				$scope.state = true;
			}else if($window.pageYOffset < 150){
				$scope.state = false;	
			}
		}, 100);

	}]);
angular.module("indexModule")
	.controller("beerTypesListController", ["$scope", function($scope){
		$scope.beerTypes = [
			{
			 name: "Inda Pale Ale",
			 description: "",
			 taste: ""
			},

			{
			 name: "Imperial Stout",
			 description: "",
			 taste: ""
			},

			{
			 name: "Rye Lager",
			 description: "",
			 taste: ""
			},

			{
			 name: "Blonde Ale",
			 description: "",
			 taste: ""
			},

			{
			 name: "Hefeweizen",
			 description: "",
			 taste: ""
			},
			
			{
			 name: "Wheat Beer",
			 description: "",
			 taste: ""
			},
			
			{
			 name: "Scottish Ale",
			 description: "",
			 taste: ""
			},
			
			{
			 name: "English Pale Ale",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},

			{
			 name: "FILLER LINK",
			 description: "",
			 taste: ""
			},
		];
	}]);