var express = require('express');
var router = express.Router();

/* GET users listing. */
const flightsCtrl = require('../controllers/flights');

//GET flights
router.get('/', flightsCtrl.index);

module.exports = router;
