angular.module('server_4').factory('meuInterceptor', function($q, $location) {  

    var meuInterceptor = {
    	responseError: function(resposta) {
    		if (resposta.status == 401) {
    		  $location.path('/auth');
    		}
            return $q.reject(resposta);
    	}
    }

    return meuInterceptor;
});