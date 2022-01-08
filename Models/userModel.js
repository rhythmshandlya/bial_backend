const mongoose = require('mongoose');
const { tripSchema } = require('./tripModel');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter your email!']
  },
  isTravelling: {
    type: Boolean,
    default: false
  },
  currentTrip: tripSchema,
  tripHistory: [tripSchema]
});

module.exports = mongoose.model('user', userSchema);
