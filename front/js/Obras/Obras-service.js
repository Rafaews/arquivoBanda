'use strict';

angular.module('ArquivoBanda')
.factory('ObrasService', ['$resource', function ($resource) {
	return $resource('/api/obras/:id', {}, {
		'query': { method: 'GET', isArray: true},
		'get': { method: 'GET'},
		'update': { method: 'PUT'}
	});
}]);
