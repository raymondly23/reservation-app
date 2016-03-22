'use strict'


var express = require('express');
var router = express.Router();

var Reservation = require('../models/reservation')

router.get('/', function(req, res) {
  Reservation.find({}, function(err, reservations) {
    if(err) {
      return res.status(400).send(err);
    }   
    res.send(reservations);
  });
});

router.post('/', function(req, res) {
  Reservation.create(req.body, function(err, newReservation) {
    res.status(err ? 400 : 200).send(err || newReservation);
  })
})

router.put('/:id', function(req, res) {
  console.log(req.params)
  Reservation.findById(req.params.id, function(err, reservation) {
    reservation.when = req.body.when;
    reservation.name = req.body.name;
    reservation.size = req.body.size;
    reservation.allergies = req.body.allergies;
    reservation.checkedIn = req.body.checkedIn;
    reservation.save(function(err) {
      if(err) {
        console.log(err);
      }
      res.send('EDITED');
    })
  })
})

router.delete('/:id', function(req, res) {
  Reservation.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    } 
    res.send('DELETED')
  })
})

module.exports = router;