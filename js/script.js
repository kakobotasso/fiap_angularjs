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
