angular.module("indexModule")
	.controller("EventsController", ["$scope", "$http", function($scope, $http){
		$scope.initMap = function(){
			$scope.getFestivals();
			$scope.centerOfMap ={lat: 39.244785, lng: -105.511852};
			$scope.eventMap = new google.maps.Map(document.getElementById('eventMap'), {
				center: $scope.centerOfMap,
				zoom: 7,
				scrollwheel: false
		  	});
		}
		$scope.getFestivals = function(){
			$http.get("/getFestivals")
			.then(function(returnData){
				$scope.events = returnData.data.events;
				console.log($scope.events);
				for(var i = 0; i < $scope.events.length; i++){
					
				  	$scope.marker = new google.maps.Marker({
						position: "Vail",
						map: $scope.eventMap,
						title: $scope.events.title,
					});
		  		}
			})
		}
		
}]);
