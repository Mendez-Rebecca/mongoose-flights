const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: null
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        validation: function(value) {
            return value >= 10 && value <= 9999
        },
        default: null
    },
    departs: {
        type: Date,
        validation: null,
        default: function() {
            const addOneYear = new Date();
            addOneYear.setFullYear(addOneYear.getFullYear() + 1);
            return addOneYear;
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema)
