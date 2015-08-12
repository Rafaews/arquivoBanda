angular.module('ArquivoBanda')
  .controller('CategoriaCtrl', ['$scope','CategoriaSvc', function ($scope, catSvc) {
  	$scope.categorias = catSvc.query();

  }]);
