const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight,
    newTicketSubmit
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
    const flight = await Flight.findById(req.params.id);
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    flight.flight.push(newTicket._id);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
}

function newTicketSubmit(req, res) {
    const flightId = req.params.id;
    res.render('tickets/new', { flightId });
}
