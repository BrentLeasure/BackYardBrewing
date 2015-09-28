angular.module("indexModule")
	.controller("RecipesController", ["$scope", function($scope){
		//===================
		// PAGINATION
		//===================

		$scope.bookmarkPageNumber = 0;
		$scope.pageNumber = 1;
		$scope.beersPerPage = 24;
		
		$scope.checkUserQuery = function(){
			if($scope.userQuery != "" && $scope.pageNumber != 1){
				$scope.bookmarkPageNumber = $scope.pageNumber;
				$scope.pageNumber = 1;
			}else if($scope.userQuery === ""){
				$scope.pageNumber = $scope.bookmarkPageNumber;
			}
		}

		$scope.moveBeerListForward = function(){
			if($scope.pageNumber < $scope.lastPage){
				$scope.pageNumber += 1;
			}
		}

		$scope.moveBeerListBackward = function(){
			if($scope.pageNumber > 1){
				$scope.pageNumber -= 1;
			}
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

		$scope.lastPage = $scope.beerTypes.length / $scope.beersPerPage;

}]);
