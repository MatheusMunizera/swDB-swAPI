const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    
    id: { type: String, required: true, index: { unique: true }},
    name: { type: String, required: true},
    opening_crawl: { type: Number,required: true},
    trailer: { type: String, required: true},
    director: { type: String},
    image: { type: String, required: true},
    producer: { type: String},
    release_date: { type: String}, 
    characters:[{type: String}],
    planets:[{type: String}],
    vehicles:[{type: String}],
    species:[{type: String}],
    resume: {type: String, required: true}
    
});

module.exports = mongoose.model('Film' , FilmSchema);