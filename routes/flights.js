var express = require('express');
var router = express.Router();

/* GET users listing. */
const flightsCtrl = require('../controllers/flights');

//GET flights
router.get('/', flightsCtrl.index);
//GET flights/new
router.get('/new', flightsCtrl.new);
//POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
