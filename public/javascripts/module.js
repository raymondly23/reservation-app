'use strict'

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html'
  })
  .state('reservation', {
    url: '/reservation',
    templateUrl: '/html/reservation.html',
    controller: 'mainCtrl'
  })
  .state('search', {
    url: '/search/:id',
    templateUrl: '/html/search.html',
    controller: 'searchCtrl'
  })

})