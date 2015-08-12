'use strict';

angular.module('ArquivoBanda')
.factory('InstrumentoService', ['$resource', function ($resource) {
	return $resource('http://localhost:3000/api/instrumentos/:id', {}, {
		'query': { method: 'GET', isArray: true},
		'get': { method: 'GET'},
		'update': { method: 'PUT'}
	});
}]);