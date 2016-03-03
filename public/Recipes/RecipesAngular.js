angular.module("indexModule")
	.controller("RecipesController", ["$scope", "$rootScope", "$cookies", "$http", "$window", "$interval", "$timeout", "$location", "PaginationFactory", "authService", "RecipeService", "multipartForm", function($scope, $rootScope, $cookies, $http, $window, $interval, $timeout, $location, PaginationFactory, authService, RecipeService, multipartForm){
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
		$scope.recipe = {alias: null, selectedCategory: null, description: null, instructions: null, username: null, userID: null, image: null};
		$scope.Paginate = PaginationFactory;
		$scope.recipe.instructions = "";
		$scope.recipe.description = "";
		
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
				multipartForm.post("/createrecipe", $scope.recipe);
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
