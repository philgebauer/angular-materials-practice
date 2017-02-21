var app = angular.module('app', ['ngMaterial','ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  // $locationProvider.hashPrefix('');
  $routeProvider
    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })
    .otherwise({
      redirectTo: '/admin'
    });//End route

}]);//End config;
