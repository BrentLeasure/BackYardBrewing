angular.module("indexModule")
	.controller("forumController", ["$scope", "PaginationFactory", "WatchWidthFactory" function($scope, PaginationFactory, WatchWidthFactory){
		$scope.pagination = [];
		$scope.pageNumber = 1;
		$scope.bookmarkPageNumber = 0;
		$scope.startingElement = 1;
		$scope.postsPerPage = 24;
		$scope.nightMode = false;

		$scope.Paginate = PaginationFactory;
		$scope.WidthChecker = WatchWidthFactory;

		window.addEventListener("resize", function(){
			$scope.WidthChecker.changeNumberOfPages($scope)});

		$scope.changePage = function(page){
			$scope.Paginate.changePagination($scope, page);
		}

		

		$scope.forumPosts = [];

		$scope.lastPage = $scope.forumPosts.length/$scope.postsPerPage;
	}]);