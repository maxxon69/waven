const uuid = require("uuid");
const express = require('express');
const itemController = require('../controllers/item.controller');
const multer = require("multer");

const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/static/images/items');
    },
    filename: function (req, file, cb) {
        cb(null, uuid.v4() + '.' + file.originalname.split('.').slice(-1));
    }
})

const upload = multer({storage});

router.post('/', upload.single("image"),itemController.create);
router.get('/', itemController.findAll);
router.get('/:id', itemController.findById);
router.put('/',upload.single("image") ,itemController.update);
router.delete('/:id', itemController.delete);
module.exports = router;
