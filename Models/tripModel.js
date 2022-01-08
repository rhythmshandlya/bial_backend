const mongoose = require('mongoose');

exports.tripSchema = new mongoose.Schema({
  to: String,
  from: String,
  pnr: String,
  date: Date,
  luggage: {
    type: [{ type: mongoose.Schema.ObjectId, ref: 'luggage' }],
    default: []
  }
});
