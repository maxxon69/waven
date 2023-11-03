const express = require('express');
const router = express.Router();
const rarityRouter = require('./rarity.router')
const typeRouter = require('./type.router')
const seasonRouter = require('./season.router')
const itemRouter = require('./item.router')
const textTemplateRouter = require('./textTemplate.router')
const itemCharacteristicRouter = require('./itemCharacteristic.router')

router.use('/type', typeRouter)
router.use('/rarity', rarityRouter)
router.use('/season', seasonRouter)
router.use('/item', itemRouter)
router.use('/textTemplate', textTemplateRouter)
router.use('/item-characteristic', itemCharacteristicRouter)

module.exports = router
