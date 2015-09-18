var map;
function initMap() {
	var centerOfMap ={lat: 39.244785, lng: -105.511852};
	map = new google.maps.Map(document.getElementById('map'), {
		center: centerOfMap,
		zoom: 7
  	});

 	var marker = new google.maps.Marker({
		position: centerOfMap,
		map: map,
		title: 'Hello World!'
	});
}

