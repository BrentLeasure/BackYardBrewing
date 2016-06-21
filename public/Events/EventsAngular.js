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

		$scope.openInfoWindow = function(passedMarker){
			for(var position = 0; position < marker.length; position++){
				if(passedMarker._id == marker[position]._id){
					console.log(marker.title);
					google.maps.event.trigger(marker[position], 'click');
					break;		
				}
			}
			
		}
		var createMarker = function(map, currentEvent){
			  	var marker = new google.maps.Marker({
			        map: map,
			        position: new google.maps.LatLng(currentEvent.latitude, currentEvent.longitude),
			    });
			    marker._id = currentEvent._id;
			    var content = "<h3>" + currentEvent.title + "</h3>" + "<p> Date: " + currentEvent.date + "</p> <a target='_blank' href = '" + currentEvent.url + "'> More Info </a>";
			    marker.infoWindow = new google.maps.InfoWindow({
		        	content: content,
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
		var setLocations = function(events, eventMap){
			console.log(events);
			for(var position = 0; position < events.length; position++){
      				if(events[position].location != "N/A"){
      					marker.push(createMarker(eventMap, events[position]));
    				}
			}
		}

}]);
