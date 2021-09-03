const express = require('express');
const router = express.Router();


//Film
const FilmController = require('../controller/FilmController')

router.put('/film/:id', FilmController.update);
router.post('/film', FilmController.add);
router.get('/films/all', FilmController.getAll);
router.get('/film/:id', FilmController.findById);
router.delete('/film/:id', FilmController.delete);

module.exports = router;