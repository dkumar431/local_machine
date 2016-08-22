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

var app = angular.module("myApp",["ngRoute"]);

//configs
app.config(function($routeProvider,$locationProvider){
	console.log("Inside config function");
	$routeProvider.when('/view1',{
		controller: 'Controller1',
		templateUrl: 'partials/view1.html'
	}).when('/view2/:fname/:lname',{
		controller: 'Controller2',
		templateUrl: 'partials/view2.html',
		resolve: {
			names: function() {
				return ['Deepak','Ajay','Amit'];
			}
		}
	}).when('/view3',{
		templateUrl: '/view3.tpl'
	}).when('/view4',{
		templateUrl: 'partials/view4.html'
	}).when('/view5',{
		controller: 'Controller5',
		templateUrl: 'partials/view5.html'
	});
	
});

//Controller
app.controller('Controller1',function($scope){
	$scope.msg = 'Controller_View_1';
});
app.controller('Controller2',function($scope,$routeParams,names){
	$scope.msg = 'Controller_View_2';
	$scope.fname = $routeParams.fname;
	$scope.lname = $routeParams.lname;
	$scope.id = $routeParams.id; //query string
	$scope.users = names;
});

app.controller('testCtrl', ['$scope','$location', function($scope,$location){
	console.log("Inside controller");
	$scope.loadview = function(){
		$location.path('/view4');
	}
	$scope.$on('$locationChangeStart', function(event, next, current) {
        //alert("inside location change.");
    });
}]);

app.controller('Controller5',function($scope){
	
});

//listener
app.run(function($rootScope){
	console.log("inside run function");
	$rootScope.$on('$routeChangeStart',function(){
		//alert("inside route change");
	})
});