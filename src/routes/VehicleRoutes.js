const express = require('express');
const router = express.Router();


//Vehicle
const VehicleController = require('../controller/VehicleController')

router.put('/vehicle/:id', VehicleController.update);
router.post('/vehicle', VehicleController.add);
router.get('/vehicles/all', VehicleController.getAll);
router.get('/vehicle/:id', VehicleController.findById);
router.deletep('/vehicle/:id', VehicleController.delete);

module.exports = router;