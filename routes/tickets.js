const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

//add a new
router.get('/tickets/new', ticketsCtrl.new);

router.get('/flights/:id/tickets/new', ticketsCtrl.newTicketSubmit);
//add a create
router.post('/tickets', ticketsCtrl.create);
//associate a ticket with a flight
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);


module.exports = router;
