'use strict'

angular.module('spBlogger.posts',["ui.router",'spBlogger.posts.controllers','spBlogger.posts.directives','spBlogger.posts.services','spBlogger.posts.filters']);

angular.module('spBlogger.posts').config(function($stateProvider,$locationProvider) {
	console.log("routes loaded.");
	
	$stateProvider.state('allPosts',{
		url: '/posts',
		templateUrl: 'angular/blog/app/modules/posts/views/posts.html',
		controller: 'PostController'
	});
	$stateProvider.state('singlePost',{
		url: '/posts/:id/:permalink',
		templateUrl: 'angular/blog/app/modules/posts/views/singlePost.html',
		controller: 'PostDetailsController'
	});
	$stateProvider.state('addPost',{
		url: '/addNewPost',
		templateUrl: 'angular/blog/app/modules/posts/views/addPost.html',
		controller: 'NewPostController'
	});
});
