const express = require('express');
const textTemplateController = require('../controllers/textTemplate.controller');
const router = express.Router();


router.post('/', textTemplateController.create);
router.get('/', textTemplateController.findAll);
router.get('/:id', textTemplateController.findById);
router.put('/', textTemplateController.update);
router.delete('/:id', textTemplateController.delete);
module.exports = router;
