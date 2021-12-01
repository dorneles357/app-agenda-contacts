angular
  .module("server_4")
  .controller("ContatosController", function ($scope, $resource) {
    $scope.contatos = [];

    $scope.filtro = "";

    var Contato = $resource('/contatos/:id');

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

    $scope.remove = function(contato){
      Contato.delete({id: contato._id}, 
        buscaContatos,
        function(erro){
          console.log('não foi possivel remover o contato');
          console.log(erro);
        } 
        );
    }
  });
