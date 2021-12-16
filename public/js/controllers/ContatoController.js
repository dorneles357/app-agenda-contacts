angular
  .module("server_4")
  .controller("ContatoController", function ($scope, $routeParams, $resource) {
    
    var Contato = $resource('contatos/:id');

    if($routeParams.contatoID){
      Contato.get({id: $routeParams.contatoID},
        function(contato){
          $scope.contato = contato;
        },
        function(erro){
          $scope.mensagem = {
            texto: "Não foi possivel obter contato"
          };
          console.log(erro);
        }
      );
    }
    else{
      $scope.contato = {};
    }
  });
