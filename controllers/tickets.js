const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addToFlight,
    newTicketSubmit
}

async function addToFlight(req, res) {
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id;
    await ticket.save();

    res.redirect(`/flights/${req.params.id}`);
}

function newTicketSubmit(req, res) {
    const flightId = req.params.id;
    res.render('tickets/new', { flightId });
}
