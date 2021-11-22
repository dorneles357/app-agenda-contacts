angular.module("server_4").controller("ContatosController", function ($scope) {
  $scope.contatos = [
    { id: 1, nome: "Goku", email: "goku@mail.com" },
    { id: 2, nome: "naruto", email: "naruto@gmail.com" },
    { id: 3, nome: "hantaro", email: "hantaro@gmail.com" },
    { id: 4, nome: "saitama", email: "saitama@gmail.com" },
  ];

  $scope.filtro = "";
});
