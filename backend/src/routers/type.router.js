const express = require('express');
const typeController = require('../controllers/type.controller');
const router = express.Router();


router.post('/', typeController.create);
router.get('/', typeController.findAll);
router.get('/:id', typeController.findById);
router.put('/', typeController.update);
router.delete('/:id', typeController.delete);
module.exports = router;
