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
	.controller("RecipesController", ["$scope", function($scope){
		//===================
		// PAGINATION
		//===================
		$scope.bookmarkBox={
			state: false
		}
		$scope.activePage = function(objectPassed){
			$scope.objectPassed.state = true;
		}

		$scope.deactivatePage = function(objectPassed){
			$scope.objectPassed.state = true;
		}

		//===================
		//   BEER TYPES
		//===================
		//List of Beers To see, select cmd + option + ]
		$scope.beerTypes = [
			{
			 alias: "India Pale Ale",
			 about: "Hello world!",
			 taste: "AIDS! AND THAT'S THE WAAAAAYYY IT GOES! LICK LICK LICK MAH BALLS! WUBBA LUBBA DUB DUB!"
			},

			{
			 alias: "Imperial Stout",
			 about: "",
			 taste: ""
			},

			{
			 alias: "Rye Lager",
			 about: "",
			 taste: ""
			},

			{
			 alias: "Blonde Ale",
			 about: "",
			 taste: ""
			},

			{
			 alias: "Hefeweizen",
			 about: "",
			 taste: ""
			},
			
			{
			 alias: "Wheat Beer",
			 about: "",
			 taste: ""
			},
			
			{
			 alias: "Scottish Ale",
			 about: "",
			 taste: ""
			},
			
			{
			 alias: "English Pale Ale",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},

			{
			 alias: "FILLER LINK",
			 about: "",
			 taste: ""
			},
		];

		//=====================
		//    LIGHTBOX
		//=====================
		$scope.lightBoxState = false;
		$scope.lightBox = {
			alias: "",
			about: "",
			taste: "",
		};

		$scope.lightBoxOn = function(beer){
			$scope.lightBox.alias = beer.alias;
			$scope.lightBox.about = beer.about;
			$scope.lightBox.taste = beer.taste;
			$scope.lightBoxState = true;
		}

		$scope.lightBoxOff = function(){
			$scope.lightBox.alias = " ";
			$scope.lightBox.about = " ";
			$scope.lightBox.taste = " ";
			$scope.lightBoxState = false;
		}
}]);
