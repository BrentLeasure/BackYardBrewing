var brewingEquipmentMap;
function initMap() {
	var centerOfMap ={lat: 39.244785, lng: -105.511852};

	brewingEquipmentMap = new google.maps.Map(document.getElementById('brewingEquipmentMap'), {
		center: centerOfMap,
		zoom: 7,
		scrollwheel: false
  	});

 	var marker = new google.maps.Marker({
		position: centerOfMap,
		map: brewingEquipmentMap,
		title: 'Hello World!'
	});
}

