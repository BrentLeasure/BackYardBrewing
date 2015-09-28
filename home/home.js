var eventMap;
function initMap() {
	var centerOfMap ={lat: 39.244785, lng: -105.511852};

	eventMap = new google.maps.Map(document.getElementById('eventMap'), {
		center: centerOfMap,
		zoom: 7,
		scrollwheel: false
  	});

 	var marker = new google.maps.Marker({
		position: centerOfMap,
		map: eventMap,
		title: 'Hello World!'
	});
}

angular.module("indexModule")
	.controller("homePageController", ["$scope", function(){


	}]);