//setting the 
angular.module("indexModule", ["ngRoute", "ui.bootstrap", "ngCookies"]);


angular.module("indexModule")
	.config(["$routeProvider", function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl : "/Home/Home.html",
				controller  : "homePageController"
			})
			.when("/forums", {
				templateUrl : "/Forum/Forum.html",
				controller  : "forumController"
			})
			.when("/recipesubmission", {
				templateUrl : "/Recipe-Submission/RecipeSubmission.html",
				controller  : "RecipesController"
			})
			.when("/recipes", {
				templateUrl : "/Recipes/Recipes.html",
				controller  : "RecipesController"
			})
			.when("/thebasics", {
				templateUrl : "/TheBasics/TheBasics.html",
				controller  : "theBasicsController"
			})
			.when("/signup", {
				templateUrl : "/Signup/Signup.html",
				controller  : "signupController"
			})
			.when("/user/:user", {
				templateUrl : "UserProfile/UserProfile.html",
				controller  : "UserController",
			})
			.when("/moreinfo/:recipe", {
				templateUrl : "/Recipe-MoreInfo/MoreRecipeInfo.html",
				controller  : "RecipeInfoController",
			})
			.when("/changerecipe/:recipeID", {
				templateUrl : "/Recipe-Update/RecipeUpdate.html",
				controller  : "RecipeUpdateController",
			})
			.otherwise({ templateUrl: "/404/404.html"})
	}])
	

	
	.controller("navController", ["$scope", "$rootScope", "$window", "$interval", "$http", "authService", function($scope, $rootScope, $window, $interval, $http, authService){
		authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
			}else{
				$scope.user=false;
			}
		});
		$scope.loggingIn = function(){
			$http.post("/auth/login", $scope.login)
			.then(function(returnData){
					if(returnData.data.err){
						$scope.loginError = returnData.data.message;
					}else{
						$scope.user = returnData.data
						$scope.loginError = "";
					}
			});
		}
	}])
	.controller("bodyController", ["$scope", "$rootScope", "$window", function($scope, $rootScope, $window){
	
	}]);