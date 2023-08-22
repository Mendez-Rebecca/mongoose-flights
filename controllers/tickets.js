const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
}

async function newTicket(req, res) {
    const tickets = await Ticket.find({}).sort('seat');
    res.render('tickets/new', { title: 'Add Ticket', tickets});
}

async function create(req, res) {
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/tickets/new');
}

async function addToFlight(req, res) {
    const flight = await Ticket.findById(req.params.id);
    flight.flight.push(req.body.ticketId);
    await flight.save();
    res.redirect(`/flights/${movie._id}`);
}
