const ApiError = require('../errors/api.error');
const itemService = require('../services/item.service');
const {Schema} = require("mongoose");
const {isTrue} = require("../utils");

class itemController {
    async create(req, res, next) {
        try {
            const {

                season,
                rarity,
                type,
                max_lvl, text

            } = req.body;
            const image = req.file;
            const parsedText = JSON.parse(text)
            if (!isTrue([season, rarity, type, text, image])) {
                return next(ApiError.badRequest(''));
            }
            const item = await itemService.create({
                season,
                rarity,
                type,
                max_lvl,
                text: parsedText,
                image: image.filename
            });
            return res.status(200).json(item);
        } catch (e) {
            next(e);
        }
    }


    async findAll(req, res, next) {
        try {
            const {type, rarity} = req.query
            const items = await itemService.findAll({type, rarity});
            return res.json(items);
        } catch (e) {
            next(e);
        }
    }

    async findById(req, res, next) {
        try {
            const item = await itemService.findById(req.params.id);
            if (!item) {
                return next(ApiError.notFound('items not found.'));
            }
            return res.json(item);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const {
                id,
                season,
                rarity,
                type,
                max_lvl, text

            } = req.body;
            const image = req.file;
            const parsedText = JSON.parse(text)
            if (!id) {
                return next(ApiError.badRequest())
            }
            const data = {season, text: parsedText, rarity, type}
            if(image) data.image = image.filename
            const item = await itemService.update({
                id, data
            });
            if (!item) {
                return next(ApiError.notFound('item not found.'));
            }
            return res.json(item);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            if (!id) {
                return next(ApiError.badRequest('Not id'))
            }
            const result = await itemService.delete(req.params.id);
            if (!result) {
                return next(ApiError.notFound('items not found.'));
            }
            return res.json({message: 'items deleted.'});
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new itemController();
