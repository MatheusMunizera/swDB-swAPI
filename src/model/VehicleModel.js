const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    
    id: { type: String, required: true, index: { unique: true }},
    name: { type: String, required: true},
    model: { type: String}, 
    resume: {type: String, required: true},
    image: {type: String, required: true},
    manufacturer: { type: String},
    cost_in_credits: { type: String},
    length: { type: String},
    max_atmosphering_speed: { type: Number},
    crew:{ type: String},
    passengers:{ type: String},
    cargo_capacity:{ type: String},
    consumables:{ type: String},
    films:[{type: String}],
    created:{ type: String},
    edited:{ type: String},
    hyperdrive_rating: {type: null || String}
});

module.exports = mongoose.model('Vehicle' , VehicleSchema);