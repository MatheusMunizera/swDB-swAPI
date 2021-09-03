const express = require('express');
const router = express.Router();


//Character
const CharacterController = require('../controller/CharacterController')

router.put('/character/:id', CharacterController.update);
router.post('/character', CharacterController.add);
router.get('/characters/all', CharacterController.getAll);
router.get('/character/:id', CharacterController.findById);
router.delete('/character/:id', CharacterController.delete);

module.exports = router;