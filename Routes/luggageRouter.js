const express = require('express');
const luggageController = require('./../Controllers/luggageController.js');

const router = express.Router();

router.get('/find/:token', luggageController.findLuggage);
router.get('/:luggageId', luggageController.getLuggage);
router.patch('/:luggageId', luggageController.luggageLostAndFound);

module.exports = router;
