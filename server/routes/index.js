const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
// const userController = require('../controllers/userController');
const billsController = require('../controllers/billsController');

// TODO
// router.post('/login', authController.login);
// router.post('/register',
//   userController.validateRegister,
//   userController.register,
//   authController.login
// );

router.get('/bills', billsController.getBills);

module.exports = router;
