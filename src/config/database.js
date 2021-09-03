const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/swDB';
//const uri = process.env.MONGODB_URI


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
