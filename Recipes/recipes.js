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

		//===================
		//   BEER TYPES
		//===================
		//List of Beers To see, select cmd + option + ]
		$scope.beerTypes = [
			{
			 alias: "India Pale Ale",
			 about: "",
			 taste: ""
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




}]);
