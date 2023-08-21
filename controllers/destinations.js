const Flight = require('../models/flight');

module.exports = {
    show,
    create
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);

    res.render('flights/show', { flight });
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);

    const newDestination = {
        airport: req.body.airport,
        arrival: new Date(req.body.arrival)
    }

    flight.destinations.push(newDestination);

    try {
        await flight.save();
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`);
}
