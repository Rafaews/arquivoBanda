'use strict';

angular.module('ArquivoBanda')
.controller('ObrasController', ['$scope', '$modal','ObrasService','SubCategoriaService', 'InstrumentoService', 'CategoriaSvc',
  function ($scope, $modal, ObrasSvc, SubCatSvc, InstSvc, CatSvc) {

    $scope.obras         = ObrasSvc.query();
    $scope.currentObra   = {};
    $scope.editing       = false;
    $scope.categorias    = CatSvc.query();
    $scope.subcategorias = SubCatSvc.query();
    $scope.instrumentos  = InstSvc.query();

    $scope.save = function(){
      if($scope.currentObra.nome != null){
        ObrasSvc.save($scope.currentObra);
        $scope.editing       = false;
        $scope.currentObra   = {};
        $scope.obras         = ObrasSvc.query();
        alert("Obra Salva Com Sucesso!!");
      }else{
      alert("Falhou");
      }
    };

    $scope.cancelar = function(){
        $scope.editing       = false;
        $scope.currentObra   = {};
    };

    $scope.delete = function(id, categoria, nome){
      if(confirm("Tem Certeza que deseja excluir: " + categoria + " " + nome + "?")){
        ObrasSvc.delete({id: id});
        $scope.obras = ObrasSvc.query();
        alert(categoria + " " + nome + " Deletado com sucesso!!");
      }
    }

  //     $scope.create = function () {
  //       $scope.clear();
  //       $scope.open();
  //     };

  //     $scope.update = function (id) {
  //       $scope.Obras = Obras.get({id: id});
  //       $scope.open(id);
  //     };

  //     $scope.delete = function (id) {
  //       Obras.delete({id: id},
  //         function () {
  //           $scope.Obras = Obras.query();
  //         });
  //     };

  //     $scope.save = function (id) {
  //       if (id) {
  //         Obras.update({id: id}, $scope.Obras,
  //           function () {
  //             $scope.Obras = ObrasSvc.query();
  //             $scope.clear();
  //           });
  //       } else {
  //         Obras.save($scope.Obras,
  //           function () {
  //             $scope.Obras = Obras.query();
  //             $scope.clear();
  //           });
  //       }
  //     };

  //     $scope.clear = function () {
  //       $scope.Obras = {

  //         "Nome": "",

  //         "Numero": "",

  //         "id": ""
  //       };
  //     };

  //     $scope.open = function (id) {
  //       var ObrasSave = $modal.open({
  //         templateUrl: 'Obras-save.html',
  //         controller: 'ObrasSaveController',
  //         resolve: {
  //           Obras: function () {
  //             return $scope.Obras;
  //           }
  //         }
  //       });

  //       ObrasSave.result.then(function (entity) {
  //         $scope.Obras = entity;
  //         $scope.save(id);
  //       });
  //     };
  //   }])
  // .controller('ObrasSaveController', ['$scope', '$modalInstance', 'Obras',
  //   function ($scope, $modalInstance, Obras) {
  //     $scope.Obras = Obras;



  //     $scope.ok = function () {
  //       $modalInstance.close($scope.Obras);
  //     };

  //     $scope.cancel = function () {
  //       $modalInstance.dismiss('cancel');
  //     };

  $scope.tons = [
    {"tom" : "C maior"}
   ,{"tom" : "D maior"}
   ,{"tom" : "E maior"}
   ,{"tom" : "F maior"}
   ,{"tom" : "G maior"}
   ,{"tom" : "A maior"}
   ,{"tom" : "B maior"}
   ,{"tom" : "C# maior"}
   ,{"tom" : "D# maior"}
   ,{"tom" : "E# maior"}
   ,{"tom" : "F# maior"}
   ,{"tom" : "G# maior"}
   ,{"tom" : "A# maior"}
   ,{"tom" : "B# maior"}
   ,{"tom" : "Cb maior"}
   ,{"tom" : "Db maior"}
   ,{"tom" : "Eb maior"}
   ,{"tom" : "Fb maior"}
   ,{"tom" : "Gb maior"}
   ,{"tom" : "Ab maior"}
   ,{"tom" : "Bb maior"}
   ,{"tom" : "C menor"}
   ,{"tom" : "D menor"}
   ,{"tom" : "E menor"}
   ,{"tom" : "F menor"}
   ,{"tom" : "G menor"}
   ,{"tom" : "A menor"}
   ,{"tom" : "B menor"}
   ,{"tom" : "C# menor"}
   ,{"tom" : "D# menor"}
   ,{"tom" : "E# menor"}
   ,{"tom" : "F# menor"}
   ,{"tom" : "G# menor"}
   ,{"tom" : "A# menor"}
   ,{"tom" : "B# menor"}
   ,{"tom" : "Cb menor"}
   ,{"tom" : "Db menor"}
   ,{"tom" : "Eb menor"}
   ,{"tom" : "Fb menor"}
   ,{"tom" : "Gb menor"}
   ,{"tom" : "Ab menor"}
   ,{"tom" : "Bb menor"}
  ];

  $scope.localizacoes = [
    {"local":"Dobrados 1"}
   ,{"local":"Dobrados 2"}
   ,{"local":"Dobrados 3"}
   ,{"local":"Dobrados 4"}
   ,{"local":"Dobrados 5"}
   ,{"local":"Hinos e Canções 1"}
   ,{"local":"Hinos e Canções 2"}
   ,{"local":"Hinos e Canções 3"}
   ,{"local":"Hinos e Canções 4"}
   ,{"local":"Hinos e Canções 5"}
   ,{"local":"Classicos 1"}
   ,{"local":"Classicos 2"}
   ,{"local":"Classicos 3"}
   ,{"local":"Classicos 4"}
   ,{"local":"Classicos 5"}
   ,{"local":"Populares 1"}
   ,{"local":"Populares 2"}
   ,{"local":"Populares 3"}
   ,{"local":"Populares 4"}
   ,{"local":"Populares 5"}
  ];

  $scope.formatos = [
    {"fmt":"enc"}
   ,{"fmt":"sib"}
   ,{"fmt":"pdf"}
   ,{"fmt":"mus"}
   ,{"fmt":"mid"}
  ];
}]);
