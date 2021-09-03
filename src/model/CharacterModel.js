const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    id: { type: String, required: true, index: { unique: true }},
    name: { type: String, required: true},
    height: { type: Number},
    mass: { type: Number},
    gender: { type: String, required: true},
    homeworld: { type: String},
    wiki: { type: String, required: true},
    image: { type: String, required: true},
    born: { type: Number},
    bornLocation: { type: String},
    died: { type: Number},
    diedLocation: { type: String},
    species: { type: String},
    hairColor: { type: String},
    eyeColor: { type: String},
    skinColor: { type: String},
    cybernetics: { type: String},
    affiliations: [{ type: String}],
    masters: [{ type: String}],
    apprentices: [{ type: String }],
    resume: { type: String, required: true}

});

module.exports = mongoose.model('Character', CharacterSchema);