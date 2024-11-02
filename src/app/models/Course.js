const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String},
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 225 },
    createdAt: { type: Date, default: Date.now },
    uppdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
