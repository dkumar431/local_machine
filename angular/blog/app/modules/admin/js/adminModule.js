angular.module('spBlogger.admin',["ui.router","spBlogger.admin.controllers","spBlogger.admin.services"]);

angular.module('spBlogger.admin').config(['$stateProvider','$httpProvider',function($stateProvider,$httpProvider) {
	console.log("routes loadded for admin.");

	$stateProvider.state('admin',{
		url: '/admin',
		controller: 'AdminController',
		templateUrl: 'angular/blog/app/modules/admin/views/admin-home.html',
		abstract: true

	}).state('admin.postNew',{
		url: '/posts/new',
		controller: 'PostCreationController',
		templateUrl: 'angular/blog/app/modules/admin/views/admin-new-post.html'

	}).state('admin.postUpdate',{
		url: '/posts/:id/edit',
		controller: 'PostUpdateController',
		templateUrl: 'angular/blog/app/modules/admin/views/admin-update-post.html'

	}).state('admin.postViewAll',{
		url: '',
		controller: 'PostListController',
		templateUrl: 'angular/blog/app/modules/admin/views/admin-all-posts.html'
	});
	  
}]);

// app.config(['$httpProvider', function ($httpProvider) {

// }]);