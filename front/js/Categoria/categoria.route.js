'use strict';

angular.module('ArquivoBanda')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/categorias', {
        templateUrl: 'views/Categoria/categoria.html',
        controller: 'CategoriaCtrl',
        // resolve:{
        //   resolvedObras: ['Obras', function (Obras) {
        //     return Obras.query();
        //   }]
        // }
      })
    }]);
