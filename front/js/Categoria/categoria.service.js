'use strict';

angular.module('ArquivoBanda')
  .factory('CategoriaSvc', ['$resource', function ($resource) {
    return $resource('http://localhost:3000/api/categorias/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
