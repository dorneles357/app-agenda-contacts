angular
  .module("server_4", ["ngRoute", "ngResource"])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('meuInterceptor')

    $routeProvider.when("/contatos", {
      templateUrl: "partials/contatos.html",
      controller: "ContatosController",
    });

    $routeProvider.when("/contato/:contatoID", {
      templateUrl: "partials/contato.html",
      controller: "ContatoController",
    });
    $routeProvider.when("/contato",{
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    $routeProvider.when("/auth", {
      templateUrl: 'partials/auth.html'
    });

    $routeProvider.otherwise({ redirectTo: "/contatos" });
  });
