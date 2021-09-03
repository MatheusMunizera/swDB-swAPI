const express = require('express');
const router = express.Router();


//Serie
const SerieController = require('../controller/SerieController')

router.put('/serie/:id', SerieController.update);
router.post('/serie', SerieController.add);
router.get('/series/all', SerieController.getAll);
router.get('/serie/:id', SerieController.findById);
router.deletep('/serie/:id', SerieController.delete);

module.exports = router;