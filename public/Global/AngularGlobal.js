//setting the 
angular.module("indexModule", ["ngRoute", "ui.bootstrap", "ngCookies"]);


angular.module("indexModule")
	.config(["$routeProvider", function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl : "/Home/Home.html",
				controller  : "homePageController"
			})
			.when("/events", {
				templateUrl: "/Temp/Temp.html"
				// templateUrl : "/Events/Events.html",
				// controller  : "EventsController"
			})
			.when("/forums", {
				templateUrl: "/Temp/Temp.html"
				// templateUrl : "/Forum/Forum.html",
				// controller  : "forumController"
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
				templateUrl: "/Temp/Temp.html"
				// templateUrl : "/TheBasics/TheBasics.html",
				// controller  : "theBasicsController"
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
			.when("/AboutMe", {
				templateUrl : "/InfoPages/AboutMe.html",
			})
			.otherwise({ templateUrl: "/404/404.html"})
	}])
	

	
	.controller("navController", ["$scope", "$rootScope", "$window", "$interval", "WatchWidthFactory", "authService", function($scope, $rootScope, $window, $interval, WatchWidthFactory, authService){
		authService.getUserInfo(function(user){
			if(user){
				$scope.user = user;
			}else{
				$scope.user=false;
			}
		});

		$scope.WidthChecker = WatchWidthFactory;

		$scope.WidthChecker.pageWidth($rootScope, $scope, $window)
		$scope.checkWidth = function(){
			$scope.WidthChecker.pageWidth($rootScope, $scope, $window)
		}
		$interval($scope.checkWidth, 1000);

		$scope.route = function(){
			authService.getUserInfo(function(user){
				if(!user){
					$window.location.href = "/#/"
				}else{
					$window.location.href = "/#/user/" + user.username;
				}
			})
		}

	}])
	.controller("bodyController", ["$scope", "$rootScope", "$window", function($scope, $rootScope, $window){
	
	}]);