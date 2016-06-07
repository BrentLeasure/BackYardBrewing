angular.module("indexModule")
	.controller("EventsController", ["$scope", "$http", function($scope, $http){
		var lastMarker;
		$scope.initMap = function(){
			var centerOfMap ={lat: 39.244785, lng: -105.511852};
			var eventMap = new google.maps.Map(document.getElementById('eventMap'), {
				center: centerOfMap,
				zoom: 7,
				scrollwheel: false
		  	});
		  	getFestivals(eventMap);
		}
		var getFestivals = function(eventMap){
			$http.get("/getFestivals")
			.then(function(returnData){
				$scope.events = returnData.data.events;
				setLocations($scope.events, eventMap);
			})
		}

		var createMarker = function(map, currentEvent){
			if(currentEvent.location != "N/A"){
			  	var marker = new google.maps.Marker({
			        map: map,
			        position: new google.maps.LatLng(currentEvent.latitude, currentEvent.longitude),
			    });
				
				marker.infoWindow = new google.maps.InfoWindow({
	            	content: currentEvent.title,
		        });
		        google.maps.event.addListener(marker, 'click', function(){		    
		            marker.infoWindow.open(map, marker);	
		            // if(lastMarker != undefined){     
		            // 	marker.infoWindow.close(map, lastMarker);		      
		            // }
		            // lastMarker = marker;     
		        });
		        return marker;
	        }
		}
		var setLocations = function(events, eventMap){
			for(var i = 0; i < events.length; i++){
					var marker = createMarker(eventMap, events[i]);
			}
		}
}]);
