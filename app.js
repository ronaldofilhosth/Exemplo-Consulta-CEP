var app = angular.module('app',['ui.mask']);

app.factory('consucep', function($http){
	return {
		cepget : function(cep){
			return $http.get('https://viacep.com.br/ws/'+cep+'/json/').success(function(dados){
				return dados;
			});
		}
	}
});

app.controller('consultaCepController', ['$scope','consucep',function($scope, consucep){
 	$scope.buscarCep = function(cep){
		//$http.get('https://viacep.com.br/ws/'+cep+'/json/').success(function(data){		
			consucep.cepget(cep).success(function(data){
				$scope.cepEn = data;
			});
		};
		
	
}]);