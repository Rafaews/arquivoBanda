'use strict';

angular.module('ArquivoBanda')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/Obras', {
        templateUrl: 'views/Obras/Obras.html',
        controller: 'ObrasController',
        // resolve:{
        //   resolvedObras: ['Obras', function (Obras) {
        //     return Obras.query();
        //   }]
        // }
      })
    }]);
