var app = angular.module('appClinica', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'tratamentos.html'
    })
    .when('/tratamentos', {
      templateUrl: 'tratamentos.html'
    })
    .when('/medicos', {
      templateUrl: 'medicos.html'
    })
    .when('/agenda', {
      templateUrl: 'agenda.html'
    })
    .otherwise({redirectTo: '/'})
}])
.controller('Tratamentos', [function () {
  var self = this;
  self.listaTratamentos = tratamentos.all();
}])
.controller('Medicos',  ['$http', function ($http) {
  var self = this;
  self.listaMedicos = [];
  $http.get('raw/medicos.txt').then(function (response) {
    self.listaMedicos = response.data;
  }, function (error) {
    alert('Erro reportado: ' + error);
  });
}])
