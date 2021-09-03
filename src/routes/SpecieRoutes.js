const express = require('express');
const router = express.Router();


//Specie
const SpecieController = require('../controller/SpecieController')

router.put('/specie/:id', SpecieController.update);
router.post('/specie', SpecieController.add);
router.get('/species/all', SpecieController.getAll);
router.get('/specie/:id', SpecieController.findById);
router.deletep('/specie/:id', SpecieController.delete);

module.exports = router;