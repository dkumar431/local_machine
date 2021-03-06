angular.module('spBlogger.admin.controllers', [])
	.controller('AdminController', ['$scope', function($scope){
		
	}]).controller('PostCreationController', ['$scope','$state','Post', function($scope,$state,Post){

		$scope.post = new Post();
		$scope.buttonText = "Create";
		$scope.savePost = function(){
			$scope.buttonText = "Saving ...";
			$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g,'-');
			$scope.post.$save(function(){
				$state.go('admin.postViewAll')
			});
		}

		
	}]).controller('PostUpdateController', ['$scope','$state','$stateParams','Post', function($scope,$state,$stateParams,Post){

		$scope.post = Post.get({id: $stateParams.id});
		$scope.buttonText = "Update";
		$scope.updatePost = function(){
			$scope.buttonText = "Updating ...";
			$scope.post.$update(function(){
				$state.go('admin.postViewAll');
			})
		}
		
	}]).controller('PostListController', ['$scope','Post','popupService','$state', function($scope,Post,popupService,$state){
		
		$scope.posts = Post.query();
		console.log($scope.posts);

		$scope.deletePost = function(post){
			console.log(post);
			if(popupService.showPopup("Are you sure to delete this post?")){
				post.$delete(function(){
					$state.go('admin.postViewAll',undefined,{reload: true});
					//console.log("I am clledd");
				})
			}
		}


	}]);