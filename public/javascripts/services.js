'use strict'

var app = angular.module('myApp');

app.service('ReservationService', function($http) {
  
  this.fetch = function() {
    return $http.get('/reservations')
  };

  this.create = function(newData) {
    return $http.post('/reservations', newData)
  };

  this.edit = function(reservation) {
    console.log(reservation)
    return $http.put(`/reservations/${reservation._id}`, reservation)
  }

  this.delete = function(id) {
    return $http.delete(`/reservations/${id}`)
  }


});