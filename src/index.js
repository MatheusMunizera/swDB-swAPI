const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;

const CharacterRoutes = require('./routes/CharacterRoutes');
const FilmRoutes = require('./routes/FilmRoutes');
const PlanetRoutes = require('./routes/PlanetRoutes')

server.use('/', CharacterRoutes);
server.use('/', FilmRoutes);
server.use('/', PlanetRoutes);

server.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
})