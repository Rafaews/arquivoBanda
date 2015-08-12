'use strict';

angular.module('ArquivoBanda')
.factory('InstrumentoService', ['$resource', function ($resource) {
	return $resource('/api/instrumentos/:id', {}, {
		'query': { method: 'GET', isArray: true},
		'get': { method: 'GET'},
		'update': { method: 'PUT'}
	});
}]);