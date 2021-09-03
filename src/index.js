const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;

const CharacterRoutes = require('./routes/CharacterRoutes');
const FilmRoutes = require('./routes/FilmRoutes');
const PlanetRoutes = require('./routes/PlanetRoutes');
const SerieRoutes = require('./routes/SerieRoutes');


server.use('/', CharacterRoutes);
server.use('/', FilmRoutes);
server.use('/', PlanetRoutes);
server.use('/', SerieRoutes);

server.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
})