const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA', 'GEG']
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    ticket: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
    destinations: [destinationSchema]
});

flightSchema.statics.getDateData = function () {
    const defaultDate = this.schema.path('departs').default()();
    const defaultDepartureDate = defaultDate.toISOString().slice(0, 16);
    return defaultDepartureDate;
}

module.exports = mongoose.model('Flight', flightSchema)
