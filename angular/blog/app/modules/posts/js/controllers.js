'use strict'

angular.module('spBlogger.posts.controllers',[]);

angular.module('spBlogger.posts.controllers').

	controller('PostController', ['$scope','Post', function($scope,Post){
		$scope.getAllPosts = function(){
			return Post.query();
		}

		$scope.posts = $scope.getAllPosts();

	}]).
	controller('PostDetailsController', ['$state','$stateParams','$scope','Post','postService', function($state,$stateParams,$scope,Post,postService){
		

		$scope.getPostById = function(id){
			console.log("getPostById is called");
			//Post.get({id: id});
			return postService.getPostById(id)
		}

		$scope.closePost = function(){
			$state.go('allPosts')
		}

		$scope.singlePost = $scope.getPostById($stateParams.id);

	}])
	// .controller('NewPostController', ['$scope', function($scope){
	// 	$scope.types = [ 
	// 			{id: 1, desc: "Entertainment"},
	// 			{id: 2, desc: "Education"},
	// 			{id: 3, desc: "Business"}];
	// }]);
