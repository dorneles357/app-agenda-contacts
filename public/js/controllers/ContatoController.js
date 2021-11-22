angular
  .module("server_4")
  .controller("ContatoController", function ($scope, $routeParams) {
    console.log($routeParams.contatoID);
  });
