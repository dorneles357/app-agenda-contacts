angular
  .module("server_4")
  .controller("ContatoController", function ($scope, $routeParams, Contato) {

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
      $scope.contato = new Contato();
    }

    $scope.salvar = function(){
      $scope.contato.$save()
        .then(function(){
          $scope.mensagem = {texto: 'Salvo com sucesso!'};

          //limpa form
          $scope.contato = new Contato();
        })
        .catch(function(err){
          $scope.mensagem = {texto: 'Não foi possível salvar!'}
        })
    }

    Contato.query((contatos)=>{
      $scope.contatos = contatos;
    });
  });
