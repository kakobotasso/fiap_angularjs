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
.controller('Agenda', ['$http', function ($http) {
  var self = this;

  self.tratamentos = tratamentos.all();
  self.medicos = [];
  $http.get('raw/medicos.txt').then(function (response) {
    self.medicos = response.data;
  }, function (error) {
    alert('Erro reportado: ' + error);
  });

  self.submit = function () {
    var data = new Date(self.data);
    var horario = new Date(self.hora);

    var dia = (data.getDate() < 10) ? "0" + data.getDate() : data.getDate();
    var mes = ((data.getMonth() + 1) < 10) ? ("0" + (data.getMonth() + 1)) : (data.getMonth() + 1);
    var data_formatada = dia + "/" + mes + "/" + data.getFullYear();

    var hora = (horario.getHours() < 10) ? "0" + horario.getHours() : horario.getHours();
    var minuto = (horario.getMinutes() < 10) ? "0" + horario.getMinutes() : horario.getMinutes();
    var hora_formatada = hora + ":" + minuto;

    var agendamento = {
      data_hora: data_formatada + " " + hora_formatada,
      tipo_consulta: self.tipo_consulta,
      tratamento: self.tratamento,
      medico: self.medico
    };

    alert("Agendamento confirmado")

    self.retorno =  agendamento["tratamento"] +
                    " com o(a) Dr(a). " + agendamento["medico"] +
                    " confirmado para " + agendamento["data_hora"] +
                    " (" + agendamento["tipo_consulta"] + ")"
  };
}])
