angular.module("indexModule")
.directive("fileModel", ["$parse", function($parse){
	return{
		restrict: "A",
		link: function(scope, element, attrs){
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;
		}
	}
}]);