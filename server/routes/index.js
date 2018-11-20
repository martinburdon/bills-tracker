const express = require('express');
const router = express.Router();
const outgoingController = require('../controllers/outgoingController');

// router.get('/api/outgoings', outgoingController.getOutgoings);
router.post('/api/outgoings', outgoingController.addOutgoing);

module.exports = router;
