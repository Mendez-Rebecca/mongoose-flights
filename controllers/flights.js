const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    try {
        const flights = await Flight.find({}).sort({ departs: 1 });
        const currentDate = new Date();

        flights.forEach(flight => {
            flight.departurePassed = flight.departs < currentDate;
        });

        res.render('flights/index', { flights });
    } catch (err) {
        console.error(err);
        res.render('error', { errorMsg: 'Error retrieving flights' });
    }
}

function newFlight(req, res) {
    const departsDate = Flight.getDateData();
    res.render('flights/new', { departsDate });
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message});
    }
}

async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({ flight: flight._id });
        res.render('flights/show', { flight, tickets });
    } catch (err) {
        console.log(err);
    }
}
