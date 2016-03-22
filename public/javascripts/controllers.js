'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, ReservationService) {

  function render() {
    ReservationService.fetch()
    .then(function(res) {
      $scope.reservations = res.data
    }, function(err) {
      console.error('err:', err)
    });
  }


  $scope.check = function(reservation, checkedIn){
    if(checkedIn !== true){
      reservation.checkedIn = false;
      console.log(reservation)
    ReservationService.edit(reservation)
      .then(function(res){
      }, function(err){
        console.error('error', err)
      });
    };


    if(checkedIn !== false){
      reservation.checkedIn = true;
    ReservationService.edit(reservation)
      .then(function(res){
      }, function(err){
        console.error('error', err)
      });
    };
  };


  $scope.delete = function(reservation) {
    console.log('frontend',reservation._id)
    ReservationService.delete(reservation._id)
    .then(function(res) {
      render();
    }, function(err) {
      console.error('err', err)
    })
  }

  $scope.submit = function(){
    ReservationService.create($scope.newReservation)
    .then(function(res) {
      render();
      $scope.newReservation = {};
    }, function(err) {
      console.error('error:', err)
    })
  }

  $scope.edit = function(reservation) {
    $scope.editReservation = angular.copy(reservation)
  }

  $scope.confirm = function() {
    ReservationService.edit($scope.editReservation)
    .then(function(res) {
      render();
      console.log('EDITED')
    }, function(err) {
      console.log('error:', err)
    })
  }

  render();



})