'use strict';

var mongoose = require('mongoose'); 

var Reservation = mongoose.model('Reservation', {
  when: {type: Date},
  name: String,
  size: Number,
  allergies: String,
  checkedIn: {type: Boolean, default: false}
});

module.exports = Reservation;