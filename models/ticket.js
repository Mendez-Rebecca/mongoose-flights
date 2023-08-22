const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket: {
        seat: String,
        price: Number,
        flight: ObjectId
    }
})

module.exports = mongoose.model('Ticket', ticketSchema);
