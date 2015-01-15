// Controlador para buscar propuestas,

angular

.module('PropuestasApp')

.controller('PropuestasCtrl',PropuestasCtrl);


function PropuestasCtrl($scope,$http){

		console.log('Controlador de propuestas')
		$scope.btnNew = 'btn-default'
		$scope.btnTop = 'btn-default'
		$scope.btnHot = 'btn-default'
		$scope.btnCmnt = 'btn-default'

		console.log('entrando en el controlador')

		$scope.GetData = function(type){


			switch (type)
			{
				case 'new':
					$scope.btnNew = 'btn-success'
					$scope.btnTop = 'btn-default'
					$scope.btnHot = 'btn-default'
					$scope.btnCmnt = 'btn-default'
					$scope.envios = {}

				break
				case 'hot':
					$scope.btnHot = 'btn-success'
					$scope.btnNew = 'btn-default'
					$scope.btnTop = 'btn-default'
					$scope.btnCmnt = 'btn-default'
					$scope.envios = {}
				break
				case 'top':
					$scope.btnTop = 'btn-success'
					$scope.btnNew = 'btn-default'
					$scope.btnHot = 'btn-default'
					$scope.btnCmnt = 'btn-default'
					$scope.envios = {}
				break
				case 'comments':
					$scope.btnCmnt = 'btn-success'
					$scope.btnTop = 'btn-default'
					$scope.btnNew = 'btn-default'
					$scope.btnHot = 'btn-default'
					$scope.envios = {}
				break	

			}

			var urlBase = 'http://api.reddit.com/r/Podemos/search?q=flair%3APropuestas&sort='
  			var url = urlBase + type + '&restrict_sr=on&t=all&limit=' + '10'
  			
  			$http.get(url)
				.success(function (data){$scope.envios = data.data.children})


		}

		
		
	}
