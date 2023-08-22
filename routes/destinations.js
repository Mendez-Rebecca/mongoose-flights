const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

const destinationsCtrl = require('../controllers/destinations');

router.get('/flights/:id', flightsCtrl.show);
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;
