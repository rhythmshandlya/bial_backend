const express = require('express');
const authController = require('./../Controllers/authController.js');
const userController = require('./../Controllers/userController.js');

const router = express.Router();

//User Router
router.post('/login', authController.login);
router.get('/', userController.getUser);
router.patch('/startTrip', userController.startTrip);
router.post('/endTrip', userController.endTrip);
router.post('/addLuggage', userController.addLuggage);
router.get('/getLuggage', userController.getAllLuggage);

module.exports = router;
