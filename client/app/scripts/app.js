'use strict';

/**
 * @ngdoc overview
 * @name pomodoroleaderboardApp
 * @description
 * # pomodoroleaderboardApp
 *
 * Main module of the application.
 */
var app = angular.module('pomodoroleaderboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/timers.json', {
        templateUrl: 'views/timers.html',
        controller: 'TimersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('Timer', ['$resource', function($resource){
  return $resource('/api/timers/:id.json', null, {
    'update': {method: 'PUT'}
  });
}]);