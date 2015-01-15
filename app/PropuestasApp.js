/*
App principal Angular de seguimiento de propuestas
*/


angular
	.module('PropuestasApp',['ngRoute'])
	
	.config(function($routeProvider){

		$routeProvider
			.when('/',{controller:'PropuestasCtrl',templateUrl:'templates/propuestas.html'})
			.when('/preguntas',{controller:'PregutnasCtrl',templateUrl:'templates/preguntas.html'})
			.when('/propuestas',{controller:'PropuestasCtrl',templateUrl:'templates/propuestas.html'})
			.otherwise( {redirectTo:'/propuestas'} )
			
	})

	

	.controller('PregutnasCtrl',function($scope,$http){
		$http.get('http://api.reddit.com/r/Podemos/search?q=flair%3APreguntaAPodemos&sort=top&restrict_sr=on&t=all&limit=10')
			.success(function (data){
				$scope.envios = data.data.children

			})
		
	})
