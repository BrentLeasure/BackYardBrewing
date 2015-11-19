angular.module("indexModule")
.service('authService', ['$http', '$location', function($http, $location){
	this.getUserInfo = function(cb){
		$http.get('/api/me')
			.then( function(returnData){
				cb(returnData.data)

		})
	}									
}])
.service("WatchWidthFactory", function(){
	this.showPageChangers = function($scope, $window){
		$scope.screenWidth = $window.outerWidth;
	 		if($scope.screenWidth < 500){
	 				$scope.pageChangers = false;
	 			}else{
	 				$scope.pageChangers = true;
	 		}
	}
})

.service("RecipeService", function(){
	this.recipeInfo = function($scope, $cookies, $window, $rootScope, recipeID){
		$rootScope.turnOffScroll = false;
		$cookies.put("recipeID", recipeID);
		$window.location.href = "/#/moreinfo/" + recipeID;
	}
})
