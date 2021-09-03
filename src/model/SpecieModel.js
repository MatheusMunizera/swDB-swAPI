const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const SpecieSchema = new Schema({
    id: { type: String, required: true, index: { unique: true }},
    name: { type: String, required: true},
    classification: { type: String}, 
    resume: {type: String, required: true},
    designation:{ type: String},
    average_height: { type: String},
    skin_colors: { type: String},
    hair_colors: { type: String},
    eye_colors: { type: Number},
    average_lifespan:{ type: String},
    language:{ type: String},
    people:[{type: String}],
    films:[{type: String}],
    created:{ type: String},
    edited:{ type: String},
});

module.exports = mongoose.model('Specie' , SpecieSchema);