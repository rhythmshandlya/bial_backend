const mongoose = require('mongoose');

const luggageSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  token: String,
  description: String,
  color: String,
  lost: {
    type: Boolean,
    default: false
  },
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('luggage', luggageSchema);
