angular.module("indexModule")
	.factory("PaginationFactory", function(){
		checkUserQuery = function($scope){
			if($scope.userQuery != "" && $scope.pageNumber != 1){
				$scope.bookmarkPageNumber = $scope.pageNumber;
				$scope.pageNumber = 1;
			}else if($scope.userQuery === ""){
				$scope.pageNumber = $scope.bookmarkPageNumber;
			}
		}

		moveListForward = function($scope){
			if($scope.pageNumber < $scope.lastPage){
				$scope.pageNumber += 1;
			}
		}

		moveListBackward = function($scope){
			if($scope.pageNumber > 1){
				$scope.pageNumber -= 1;
			}
		}	


		changePagination = function($scope, selectedPage){
			if(selectedPage != $scope.lastPage && selectedPage.number >= 5){
				$scope.startingElement = selectedPage.number -2;

			}else if(selectedPage == $scope.lastPage){
				console.log("hello world!");
				$scope.startingElement = selectedPage.number -3;
			}else{
				$scope.startingElement = 1;
			}
			$scope.pageNumber = selectedPage.number;
		}


		setPagination = function($scope){
			for(var i = 0; i < $scope.lastPage; i++){
				$scope.pagination[i] = {};
				$scope.pagination[i].number = i + 1;
				$scope.pagination[i].state = false;
			}
		}
		return {
			checkUserQuery: checkUserQuery,
			moveListForward: moveListForward,
			moveListBackward: moveListBackward,
			changePagination: changePagination,
			setPagination: setPagination
		};
	});
