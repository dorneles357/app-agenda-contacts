angular
  .module("server_4")
  .controller("ContatosController", function ($scope, $resource) {
    $scope.contatos = [];

    $scope.filtro = "";

    var Contato = $resource('/contatos');

    function buscaContatos(){
      Contato.query(
        function(contatos){
          $scope.contatos = contatos;
        },
        function(erro){
          console.log(`Não foi possivel obter a lista de contatos!`);
          console.log(erro);
        }
      );
    }
    buscaContatos();
  });
