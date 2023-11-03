const express = require('express');
const rarityController = require('../controllers/rarity.controller');
const router = express.Router();


router.post('/', rarityController.create);
router.get('/', rarityController.findAll);
router.get('/:id', rarityController.findById);
router.put('/', rarityController.update);
router.delete('/:id', rarityController.delete);
module.exports = router;
