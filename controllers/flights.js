const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
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
    const newFlight = new Flight();

    const departs = newFlight.departs;
    const year = departs.getFullYear();
    const month = (departs.getMonth() + 1).toString().padStart(2, '0');
    const day = departs.getDate().toString().padStart(2, '0');
    const hours = departs.getHours().toString().padStart(2, '0');
    const minutes = departs.getMinutes().toString().padStart(2, '0');

    const departsDate = `${year}-${month}-${day}T${hours}:${minutes}`

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
