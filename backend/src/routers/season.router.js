const express = require('express');
const seasonController = require('../controllers/season.controller');
const router = express.Router();


router.post('/', seasonController.create);
router.get('/', seasonController.findAll);
router.get('/:id', seasonController.findById);
router.put('/', seasonController.update);
router.delete('/:id', seasonController.delete);
module.exports = router;
