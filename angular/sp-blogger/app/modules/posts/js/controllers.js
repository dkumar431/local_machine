'use strict'

angular.module('spBlogger.posts.controllers',[]);

angular.module('spBlogger.posts.controllers').
	controller('Postcontroller', ['$scope','postService', function($scope,postService){
		$scope.getAllPosts = function(){
			return postService.getAllPosts();
		}

		$scope.posts = $scope.getAllPosts();

	}]).
	controller('PostDetailsController', ['$state','$stateParams','$scope','postService', function($state,$stateParams,$scope,postService){
		$scope.singlePost = $scope.getPostByid($stateParams.id);

		$scope.getPostByid = function(id){
			postService.getPostByid(id);
		}

		$scope.closePost = function(){
			$state.go('allPosts')
		}
	}]);
