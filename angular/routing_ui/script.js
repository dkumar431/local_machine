/*
	For html5 mode, use
	//templateUrl: 'angular/routing/partials/view2.html'.

	// .otherwise({
	// 	//templateUrl: 'partials/404.html'
	// 	redirectTo:'/view1'
	// 	//templateUrl: 'partials/view1.html'
	// });

	// $locationProvider.html5Mode({
 //  		enabled: true,
 //  		requireBase: false
	// });
*/

//removed ngRouter
var app = angular.module("myApp",["ui.router"]);

//configs
// removed $routeProvider
app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	console.log("Inside config function");

	$stateProvider.state('view1',{
		url: '/view1',
		controller: 'Controller1',
		templateUrl: '/angular/routing_ui/partials/view1.html'
	}).state('view2',{
		url: '/view2/:fname',
		controller: 'Controller2',
		templateUrl: '/angular/routing_ui/partials/view2.html'
	});
	//$urlRouterProvider.otherwise('view1');
});

//Controller
app.controller('Controller1',function($scope){
	$scope.msg = 'Controller_View_1';
});

app.controller('Controller2',function($scope,$stateParams){
	$scope.msg = 'Controller_View_2';
	$scope.fname = $stateParams.fname;
	
});


