const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    id: { type: String, required: true, index: { unique: true }},
    name: { type: String, required: true},
    rotation_period:{ type: String},
    orbital_period:{ type: String},
    diameter:{ type: String},
    climate:{ type: String},
    gravity:{ type: String},
    terrain:{ type: String},
    surface_water:{ type: String},
    population:{ type: String},
    residents:[{type: String}],
    films:[{type: String}],
    created: { type: Number},
    edited: { type: String},
    image: { type: String, required: true},
    resume: {type: String, required: true}
    
});

module.exports = mongoose.model('Planet' , PlanetSchema);