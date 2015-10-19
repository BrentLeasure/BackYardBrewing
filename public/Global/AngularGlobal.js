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
			.when("/user/:user", {
				tempateUrl: "",
				controller: ""
			})
	}])
	.controller("headerController", ["$scope", "$window", "$interval", function($scope, $window, $interval){

	}])
	.controller("bodyController", ["NightModeFactory", function( NightModeFactory){
		
		this.NightMode = NightModeFactory;
		
		this.activateNightMode = function(){
			this.NightMode.activateNightMode(this);
		}
		
	}]);