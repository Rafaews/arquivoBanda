'use strict';

angular.module('ArquivoBanda')
.factory('SubCategoriaService', ['$resource', function ($resource) {
	return $resource('http://localhost:3000/api/subcategorias/:id', {}, {
		'query': { method: 'GET', isArray: true},
		'get': { method: 'GET'},
		'update': { method: 'PUT'}
	});
}]);