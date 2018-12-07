const express = require('express');
const router = express.Router();
const outgoingController = require('../controllers/outgoingController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Outgoings
router.get('/api/outgoings', outgoingController.getOutgoings);
router.post('/api/outgoings', outgoingController.addOutgoing);
router.delete('/api/outgoings', outgoingController.deleteOutgoing);
router.put('/api/outgoings', outgoingController.updateOutgoing);

// User
router.get('/api/profile', userController.profile);

// Auth
router.post('/api/register', authController.register);
router.post('/api/logout', authController.logout);
router.post('/api/login', authController.login);
router.post('/api/loginCheck', authController.isLoggedIn);

module.exports = router;
