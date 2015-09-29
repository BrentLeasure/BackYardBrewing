angular.module("indexModule")
	.controller("RecipesController", ["$scope", "PaginationFactory", function($scope, PaginationFactory){
		//===================
		// PAGINATION
		//===================
		$scope.pagination = [];
		$scope.shownPages = 5;
		$scope.pageNumber = 1;
		$scope.bookmarkPageNumber = 0;
		$scope.startingElement = 1;
		$scope.beersPerPage = 24;
		

		$scope.Paginate = PaginationFactory;
		$scope.changePage = function(page){
			$scope.Paginate.changePagination($scope, page);
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

		$scope.lastPage = Math.ceil($scope.beerTypes.length / $scope.beersPerPage);
		$scope.Paginate.setPagination($scope);
}]);
