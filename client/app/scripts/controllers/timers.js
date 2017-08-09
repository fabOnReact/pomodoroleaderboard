// app/scripts/controllers/timers.js

'use strict';

/**
 * @ngdoc function
 * @name pomodoroleaderboardApp.controller:TimerCtrl
 * @description
 * # TimersCtrl
 * Controller of the pomodoroleaderboardApp
 */

 angular.module('pomodoroleaderboardApp')
 	.controller('TimersCtrl', ['$scope', 'Timer', function($scope, Timer){ 
 		$scope.timers = Timer.query(); 
 	}]);