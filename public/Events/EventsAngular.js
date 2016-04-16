angular.module("indexModule")
	.controller("EventsController", ["$scope", function($scope){
		$scope.weekState = true;
		$scope.monthState = false;

		// $scope.activateTab = function(buttonClicked){
		// 	if(buttonClicked == 1){
		// 		$scope.weekState = true;
		// 		$scope.monthState = false;
		// 	}else if(buttonClicked == 2){
		// 		$scope.weekState = false;
		// 		$scope.monthState = true;
		// 	}
		// }

		$scope.eventMap;
		$scope.initMap = function(){
			$scope.centerOfMap ={lat: 39.244785, lng: -105.511852};

			$scope.eventMap = new google.maps.Map(document.getElementById('eventMap'), {
				center: $scope.centerOfMap,
				zoom: 7,
				scrollwheel: false
		  	});

		 // 	$scope.marker = new google.maps.Marker({
			// 	position: $scope.centerOfMap,
			// 	map: $scope.eventMap,
			// 	title: 'Hello World!'
			// });
		}
		$scope.getData = function(){
			$http.get("/festivals")
			.then(function(returnData){
				console.log(returnData);

			})
		}
}]);
