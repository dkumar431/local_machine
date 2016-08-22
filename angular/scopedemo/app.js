var app = angular.module('myApp',[]);

app.run(function($rootScope){
	$rootScope.title = "Famous Books";
	$rootScope.name = "ROOTSCOPE";
});

app.controller("SiteController",['$scope',function($scope){
	$scope.publisher = "SitePoint";
	$scope.type = "Web Development";
	$scope.name = "Scope for SiteController"
}]);

app.controller('BooksController',['$scope',function($scope){
	$scope.books = ['html5','boostrap'];
	$scope.name = "Scope for BooksController";
}])