angular.module('spBlogger.admin.services',[]).
	
	factory('Post', ['$resource','API_ENDPOINT', function($resource,API_ENDPOINT){
		return $resource(API_ENDPOINT, {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});

}]).value('API_ENDPOINT', 'https://d-angular.herokuapp.com/articles/:id'

).service('popupService', ['$window', function($window){
	this.showPopup = function(message){
		return $window.confirm(message);
	}
}]);

//http://spblogger-sitepointdemos.rhcloud.com/api/posts/:id