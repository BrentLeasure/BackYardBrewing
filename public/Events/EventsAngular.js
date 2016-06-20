angular.module("indexModule")
	.controller("EventsController", ["$scope", "$http", function($scope, $http){
		var marker = [];
		var lastMarker;
		var infoWindow;
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

		var openInfoWindow = function(markerLabel){
			console.log("hello");
			// marker.infoWindow.open(map, marker);	
		}
		var createMarker = function(map, currentEvent){
			if(currentEvent.location != "N/A"){
			  	var marker = new google.maps.Marker({
			  		label: currentEvent.title,
			        map: map,
			        position: new google.maps.LatLng(currentEvent.latitude, currentEvent.longitude),
			    });
				marker.infoWindow = new google.maps.InfoWindow({
		        	content: currentEvent.title,
		        });
				
		        google.maps.event.addListener(marker, 'click', function(){		    
		               
		            if(lastMarker){
		            	lastMarker.infoWindow.close();		     
		            }
		            lastMarker = marker; 
		            marker.infoWindow.open(map, marker);	
		          
		        });
		        return marker;
		    }
		}
		var setLocations = function(events, eventMap){
			for(var markerNumber = 0; markerNumber < events.length; markerNumber++){
      				marker.push(createMarker(eventMap, events[markerNumber]));
    			
			}
		}

}]);
