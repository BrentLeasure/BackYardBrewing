angular.module("indexModule")
	.controller("RecipesController", ["$scope", "$rootScope", "$cookies", "$http", "$window", "$interval", "PaginationFactory", "WatchWidthFactory", "authService", "RecipeService", function($scope, $rootScope, $cookies, $http, $window, $interval, PaginationFactory, WatchWidthFactory, authService, RecipeService){
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
		$rootScope.turnOffScroll = false;
		$scope.recipe = {alias: null, selectedCategory: null, description: null, instructions: null};

		$scope.Paginate = PaginationFactory;
		$scope.WidthChecker = WatchWidthFactory;

		
		//================
		//CHECKING WIDTH
		//================
		$scope.WidthChecker.showPageChangers($scope, $window)
		$scope.checkWidth = function(){
			$scope.WidthChecker.showPageChangers($scope, $window)
		}
		$interval($scope.checkWidth, 5000);
		
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
			var newRecipe = $scope.recipe;
			authService.getUserInfo(function(user){
				//add the user information to the recipe
				newRecipe.username = user.username
				newRecipe.userID = user._id;
				$http.post("/createrecipe", newRecipe)
				.then(function(returnData){
					console.log(returnData);
					if(returnData.data.err){
						$scope.err = returnData.data.message;
						$scope.hasError = true;
					}else{
						$scope.hasError = false;
						$scope.recipe = {};
					}
				})
			});
		}
		$scope.getRecipes = function(beer){
			$http.get("/beer/" + beer.alias)
			.then(function(returnData){
				$scope.recipes = returnData.data;
			}), function(error){
				console.log(error);
			}
		}

		$scope.pass = function(beer){
			$scope.getRecipes(beer);
		}
		
		$scope.recipeInfo = function(recipe){
			RecipeService.recipeInfo($scope, $cookies, $window, $rootScope, recipe);
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
			$rootScope.turnOffScroll = true;
		}

		$scope.lightBoxOff = function(){
			$scope.lightBox.alias = " ";
			$scope.lightBox.about = " ";
			$scope.lightBox.taste = " ";
			$scope.lightBoxState = false;
			$rootScope.turnOffScroll = false;
		}
}]);
