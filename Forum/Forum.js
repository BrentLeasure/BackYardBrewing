angular.module("indexModule")
	.controller("forumController", ["$scope", function(){
		
		$scope.bookmarkPageNumber = 0;
		$scope.pageNumber = 1;
		$scope.beersPerPage = 24;
		

		$scope.checkUserQuery = function(){
			if($scope.userQuery != "" && $scope.pageNumber != 1){
				$scope.bookmarkPageNumber = $scope.pageNumber;
				$scope.pageNumber = 1;
			}else if($scope.userQuery === ""){
				$scope.pageNumber = $scope.bookmarkPageNumber;
			}
		}

		$scope.moveForumPostsForward = function(){
			if($scope.pageNumber < $scope.lastPage){
				$scope.pageNumber += 1;
			}
		}

		$scope.moveForumPostsBackward = function(){
			if($scope.pageNumber > 1){
				$scope.pageNumber -= 1;
			}
		}	


		$scope.lastPage = forumPosts.length;
	}]);