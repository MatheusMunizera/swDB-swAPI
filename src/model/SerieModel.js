const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const SerieSchema = new Schema({
    id: { type: String, required: true, index: { unique: true }},
    name: { type: String, required: true},
    release_date: { type: String}, 
    image: { type: String, required: true},
    trailer: { type: String, required: true},
    resume: {type: String, required: true},
    director: { type: String},
    producer: { type: String},
    opening_crawl: { type: Number,required: true},
});

module.exports = mongoose.model('Serie' , SerieSchema);