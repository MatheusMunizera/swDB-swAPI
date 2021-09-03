const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;

const CharacterRoutes = require('./routes/CharacterRoutes');
const FilmRoutes = require('./routes/FilmRoutes')

server.use('/', CharacterRoutes);
server.use('/', FilmRoutes);

server.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
})