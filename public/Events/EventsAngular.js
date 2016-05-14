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
				// console.log($scope.events);
				// for(var i = 0; i < $scope.events.length; i++){
				// 	  	// var request = {
				// 	  	// 	location: centerOfMap,
				// 	  	// 	radius = 612000,
				// 	  	// 	keyword = $scope.events.location,
				// 	  	// }
					
				//   	$scope.marker = new google.maps.Marker({
				// 		position: "Vail",
				// 		map: $scope.eventMap,
				// 		title: $scope.events.title,
				// 	});
		  // 		}
			})
		}
		$scope.geocodeAddress = function(geocoder, events){
			var count = 0;
			console.log(events.length);
			for(var i = 0; i < events.length; i++){
				if(events[i].location != "N/A"){
					geocoder.geocode({"address" : events[i].location}, function(results, status) {
					    if (status === google.maps.GeocoderStatus.OK) {
					      var marker = new google.maps.Marker({
					        map: $scope.eventMap,
					        position: results[0].geometry.location
					      });
					      count++;
					      console.log(count);
					    } else {
					      console.log('Geocode was not successful for the following reason: ' + status);
					    }

					});
				}
			}
		}
}]);
