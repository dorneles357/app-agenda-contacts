angular
  .module("server_4")
  .controller("ContatosController", function ($scope, Contato) {
    $scope.contatos = [];

    $scope.filtro = "";

    $scope.mensagem = { texto: "" };


    function buscaContatos() {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
        },
        function (erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: `Não foi possivel obter a lista de contatos!`,
          };
        }
      );
    }
    buscaContatos();

    $scope.remove = function (contato) {
      Contato.delete({ id: contato._id }, buscaContatos, function (erro) {
        console.log(erro);
        $scope.mensagem = {
          texto: "não foi possivel remover o contato",
        };
      });
    };
  });
