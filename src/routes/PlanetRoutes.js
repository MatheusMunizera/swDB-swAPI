const express = require('express');
const router = express.Router();


//Planet
const PlanetController = require('../controller/PlanetController')

router.put('/planet/:id', PlanetController.update);
router.post('/planet', PlanetController.add);
router.get('/planets/all', PlanetController.getAll);
router.get('/planet/:id', PlanetController.findById);
router.deletep('/planet/:id', PlanetController.delete);

module.exports = router;