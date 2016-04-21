angular.module("indexModule")
	.controller("EventsController", ["$scope", "$http", function($scope, $http){
		$scope.eventMap;
		$scope.initMap = function(){
			$scope.centerOfMap ={lat: 39.244785, lng: -105.511852};

			$scope.eventMap = new google.maps.Map(document.getElementById('eventMap'), {
				center: $scope.centerOfMap,
				zoom: 7,
				scrollwheel: false
		  	});

		$scope.getFestivals = function(){
			$http.get("/getFestivals")
			.then(function(returnData){
				console.log(returnData);
			})
		}
}]);
