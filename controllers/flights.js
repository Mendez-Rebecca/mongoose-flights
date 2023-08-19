const Flights = require('../models/flight');

module.exports = {
    index
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}
