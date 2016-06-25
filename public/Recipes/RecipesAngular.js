angular.module("indexModule")
	.controller("RecipesController", ["$scope", "$http", "$window", "$interval", "$timeout", "$location", "$uibModal", "PaginationFactory", "authService", "multipartForm", function($scope, $http, $window, $interval, $timeout, $location, $uibModal, PaginationFactory, authService, multipartForm){
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
					console.log(returnData);						
						$scope.hasError = "";
						$scope.successful = "success!";
					
				},
				function(returnData){
					$scope.hasError = returnData.data.message;
					$scope.successful = "";
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
				templateUrl: 'recipeModal.html',
				controller: 'recipeModal',
				size: size,
				resolve: {
					beer: function () {
						return [beer, recipes];
					}
				}
	    	});
    	};

}])
.controller('recipeModal', ["$scope", "$uibModalInstance", "RecipeService", "$cookies", "$window", "$rootScope", "beer", function($scope, $uibModalInstance, RecipeService, $cookies, $window, $rootScope, beer) {

	$scope.beer = beer[0];
	$scope.recipes = beer[1];

	$scope.recipeInfo = function(recipeID){		
		RecipeService.recipeInfo($scope, $cookies, $window, $rootScope, recipeID);
		$uibModalInstance.dismiss('cancel');
	}
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);

