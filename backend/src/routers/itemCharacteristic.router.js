const express = require('express');
const itemCharacteristicController = require('../controllers/itemCharacteristic.controller');
const router = express.Router();


router.post('/', itemCharacteristicController.create);
router.post('/delete/many', itemCharacteristicController.deleteMany);
router.post('/many', itemCharacteristicController.createMany);
router.get('/', itemCharacteristicController.findAll);
router.get('/find-by-item/:id', itemCharacteristicController.findByItem);
router.get('/:id', itemCharacteristicController.findById);
router.put('/', itemCharacteristicController.update);
router.put('/many', itemCharacteristicController.updateMany);
router.delete('/:id', itemCharacteristicController.delete);
module.exports = router;
