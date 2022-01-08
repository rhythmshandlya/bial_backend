const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const Luggage = require('./../Models/luggageModel');
const Email = require('./../Email/email');

exports.getLuggage = async (req, res) => {
  const luggage = await Luggage.findById(req.params.luggageId);
  res.status(200).json({
    status: true,
    luggage
  });
};

exports.luggageLostAndFound = async (req, res) => {
  const luggage = await Luggage.findByIdAndUpdate(
    req.params.luggageId,
    req.body,
    { new: true }
  );
  res.status(200).json({
    status: true,
    luggage
  });
};

exports.findLuggage = async (req, res) => {
  const token = req.params.token;
  /*
    const location = req.body.location;
    const payLoad = await promisify(jwt.verify)(token, process.env.JWT_KEY);
   */
  await new Email('armaanbgp@gmail.com').sendEmailConfirmation('');
  res.status(200).json({
    status: true,
    message: 'Successfully communicated to the owner!'
  });
};
