angular.module("indexModule")
	.controller("RecipesController", ["$scope", "$rootScope", "$cookies", "$http", "$window", "$interval", "$timeout", "$location", "$uibModal", "PaginationFactory", "authService", "RecipeService", "multipartForm", function($scope, $rootScope, $cookies, $http, $window, $interval, $timeout, $location, $uibModal, PaginationFactory, authService, RecipeService, multipartForm){
		//===================
		// PAGINATION
		//===================
		$scope.pagination = [];
		$scope.pageNumber = 1;
		$scope.bookmarkPageNumber = 0;
		$scope.startingElement = 1;
		$scope.beersPerPage = 18;
		$scope.recipes = [{}];
		$scope.beerTypes = [];	
		$scope.lastPage;
		$scope.loggedIn = false;
		$scope.pageChangers = true;	
		$scope.recipe = {alias: null, selectedCategory: null, description: null, instructions: null, username: null, userID: null, image: null};
		$scope.Paginate = PaginationFactory;
		$scope.mpForm = multipartForm;
		$scope.recipe.instructions = "";
		$scope.recipe.description = "";
		$scope.animationsEnabled = true;
		
		//==========
		//GRABBING DATA
		//==========
		$http.get("/getallbeertypes")
		.then(function(returnData){
			$scope.beerTypes = returnData.data;
			$scope.lastPage = Math.ceil($scope.beerTypes.length / $scope.beersPerPage);
			$scope.Paginate.setPagination($scope);
		}), function(error){
			console.log(error)
		}	

		//==============
		//RECIPE SUMBISSION
		//==============
		$scope.createRecipe = function(){
			authService.getUserInfo(function(user){
				// add the user information to the recipe
				$scope.recipe.username = user.username;
				$scope.recipe.userID = user._id;
				$scope.mpForm.post("/createrecipe", $scope.recipe).then(function(returnData){
					if(returnData.data.err){
						$scope.hasError = returnData.data.err;
						$scope.successful = "";
					}else{
						$scope.hasError = "";
						$scope.successful = "success!";
					}
				})
			});

			
		}
		$scope.getRecipes = function(size, beer){
			$http.get("/beer/" + beer.alias)
			.then(function(returnData){
				$scope.open(size, returnData.data, beer)
			}), function(error){
				console.log(error);
			}

		}

		$scope.pass = function(size, beer){
			$scope.getRecipes(size, beer);
		}
		
		$scope.recipeInfo = function(recipeID){
			RecipeService.recipeInfo($scope, $cookies, $window, $rootScope, recipeID);
		}

		//==============
		//RECIPES
		//==============

		$scope.isLoggedIn = function(){
			authService.getUserInfo(function(user){
				if(user){
					$window.location.href = "/#/recipesubmission"
				}else{
					$scope.loggedIn = true;
				}
			})
		}

		$scope.changePage = function(page){
			$scope.Paginate.changePagination($scope, page);
		}


		//=====================
		//    LIGHTBOX
		//=====================
		$scope.open = function (size, recipes, beer) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				size: size,
				resolve: {
					beer: function () {
						return [beer, recipes];
					}
				}
	    	});
    	};

		// $scope.lightBoxState = false;
		// $scope.lightBox = {
		// 	alias: "",
		// 	about: "",
		// 	taste: "",
		// };

		// $scope.lightBoxOn = function(beer){
		// 	$scope.lightBox.alias = beer.alias;
		// 	$scope.lightBox.about = beer.about;
		// 	$scope.lightBox.taste = beer.taste;
		// 	$scope.lightBoxState = true;
		// 	$rootScope.turnOffScroll = true;
		// }

		// $scope.lightBoxOff = function(){
		// 	$scope.lightBox.alias = " ";
		// 	$scope.lightBox.about = " ";
		// 	$scope.lightBox.taste = " ";
		// 	$scope.lightBoxState = false;
		// 	$rootScope.turnOffScroll = false;
		// }
}]);

