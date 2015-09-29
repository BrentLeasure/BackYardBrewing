angular.module("indexModule")
	.controller("forumController", ["$scope", "PaginationFactory", function($scope, PaginationFactory){
		
		$scope.pagination = [];
		$scope.pageNumber = 1;
		$scope.bookmarkPageNumber = 0;
		$scope.startingElement = 1;
		$scope.postsPerPage = 24;

		$scope.Paginate = PaginationFactory;
		$scope.changePage = function(page){
			$scope.Paginate.changePagination($scope, page);
		}

		$scope.forumPosts[{
			
		}]

		$scope.lastPage = forumPosts.length/$scope.postsPerPage;
	}]);