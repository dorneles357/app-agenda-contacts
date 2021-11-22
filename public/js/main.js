angular.module("server_4", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider.when("/contatos", {
    templateUrl: "partials/contatos.html",
    controller: "ContatosController",
  });

  $routeProvider.when("/contato/:contatoID", {
    templateUrl: "partials/contato.html",
    controller: "ContatoController",
  });

  $routeProvider.otherwise({ redirectTo: "/contatos" });
});
