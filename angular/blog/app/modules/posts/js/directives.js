'use strict'

angular.module('spBlogger.posts.directives',[]);

angular.module('spBlogger.posts.directives').directive('spbComments', function(Post){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			postInstance: '='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'modules/posts/views/comments.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			$scope.saveComment = function(){
				var postID = $scope.postInstance.id;
				$scope.comment.dataPublished = new Date();
				angular.copy(postInstance,savedPostInstance);
				savedPostInstance.comments.unshift($scope.comment);
				$scope.postInstance.comments.unshift($scope.comment);
				savedPostInstance.$update();
			}
		}
	};
});