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
				var geocoder = new google.maps.Geocoder();
				$scope.events = returnData.data.events;
				$scope.geocodeAddress(geocoder, $scope.events);
			})
		}
		$scope.geocodeAddress = function(geocoder, events){
			var count = 0;
			for(var i = 0; i < events.length; i++){
				if(events[i].location != "N/A"){
					geocoder.geocode({"address" : events[i].location}, function(results, status) {
					    if (status === google.maps.GeocoderStatus.OK) {
					      var marker = new google.maps.Marker({
					        map: $scope.eventMap,
					        position: results[0].geometry.location
					      });					    
					    } else if( status = google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
					      setTimeout(function(){
					      	var marker = new google.maps.Marker({
						        map: $scope.eventMap,
						        position: results[0].geometry.location
					      	});
					      }, 2000)
					    }

					});
				}
			}
		}
}]);
