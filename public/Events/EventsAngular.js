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
				$scope.setLocations($scope.events);
			})
		}

		$scope.createMarker = function(map, currentEvent){
			if(currentEvent.location != "N/A"){
			  	var marker = new google.maps.Marker({
			        map: $scope.eventMap,
			        position: new google.maps.LatLng(currentEvent.latitude, currentEvent.longitude),
			    });
				
				var info = new google.maps.InfoWindow({
	            	content: currentEvent.title,
		        });
		        google.maps.event.addListener(marker, 'click', function(marker){
		            info.open(map, marker);
		            for(var i=0; i<this.markers.length; i++){
        this.markers[i].setMap(null);
    }
    			this.markers = new Array();
		        });
		        return marker;
	        }
		}
		$scope.setLocations = function(events){
			for(var i = 0; i < events.length; i++){
					var marker = $scope.createMarker($scope.eventMap, events[i]);
			}
		}
}]);
