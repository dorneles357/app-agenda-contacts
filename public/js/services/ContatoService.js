angular.module("server_4").factory("Contato", function($resource){
	return $resource('/contatos/:id');
});