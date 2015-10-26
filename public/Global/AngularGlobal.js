//setting the 
angular.module("indexModule", ["ngRoute", "ui.bootstrap"]);


angular.module("indexModule")
	.config(["$routeProvider", function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "/Home/Home.html",
				controller: "homePageController"
			})
			.when("/forums", {
				templateUrl: "/Forum/Forum.html",
				controller: "forumController"
			})
			.when("/recipesubbmission", {
				templateUrl: "/Recipe-Submission/RecipeSubmission.html",
				controller: "RecipesController"
			})
			.when("/recipes", {
				templateUrl: "/Recipes/Recipes.html",
				controller: "RecipesController"
			})
			.when("/thebasics", {
				templateUrl: "/The-Basics/TheBasics.html",
				controller: "theBasicsController"
			})
			.when("/signup", {
				templateUrl: "/Signup/Signup.html",
				controller: "signupController"
			})
			.when("/user/:user", {
				tempateUrl: "",
				controller: ""
			})
	}])

	.service('authService', ['$http', '$location', function($http, $location){
		
		this.authCheck = function(cb){
			$http.get('/api/me')
				.then( function(returnData){
					cb(returnData.data)

				})
		}			
						
	}])
	
	.controller("headerController", ["$scope", "$window", "$interval", "$http", "authService", function($scope, $window, $interval, $http, authService){
		console.log('AUTH', authService)
		authService.authCheck(function(user){
			$scope.user = user
		})
	}])
	.controller("bodyController", ["NightModeFactory", function( NightModeFactory){
		
		this.NightMode = NightModeFactory;
		
		this.activateNightMode = function(){
			this.NightMode.activateNightMode(this);
		}
		
	}]);