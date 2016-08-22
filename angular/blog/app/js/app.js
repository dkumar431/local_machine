'use strict'

angular.module('spBlogger',['spBlogger.posts','spBlogger.admin','spBlogger.controllers','spBlogger.directives','spBlogger.filters','spBlogger.services','ngResource']);

angular.module('spBlogger').value('version','V1.0');

angular.module('spBlogger').run(['$state', function($state){
	console.log("I am executed123");
	$state.go('admin.postNew');
}]);