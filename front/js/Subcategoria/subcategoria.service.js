'use strict';

angular.module('ArquivoBanda')
.factory('SubCategoriaService', ['$resource', function ($resource) {
	return $resource('/api/subcategorias/:id', {}, {
		'query': { method: 'GET', isArray: true},
		'get': { method: 'GET'},
		'update': { method: 'PUT'}
	});
}]);