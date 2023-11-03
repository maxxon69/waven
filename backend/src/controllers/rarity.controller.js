const ApiError = require('../errors/api.error');
const rarityService = require('../services/rarity.service');

class nominationController {
    async create(req, res, next) {
        try {
            const {text, color} = req.body;

            if (!text || !color) {
                return next(ApiError.badRequest(''));
            }
            const nomination = await rarityService.create({text, color});
            return res.status(200).json(nomination);
        } catch (e) {
            next(e);
        }
    }


    async findAll(req, res, next) {
        try {
            const nominations = await rarityService.findAll();
            return res.json(nominations);
        } catch (e) {
            next(e);
        }
    }

    async findById(req, res, next) {
        try {
            const nomination = await rarityService.findById(req.params.id);
            if (!nomination) {
                return next(ApiError.notFound('types not found.'));
            }
            return res.json(nomination);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const {id, data} = req.body;
            if (!id || !data) {
                return next(ApiError.badRequest())
            }
            const rarity = await rarityService.update({id, data});
            if (!rarity) {
                return next(ApiError.notFound('nomination not found.'));
            }
            return res.json(rarity);
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
            const result = await rarityService.delete(req.params.id);
            if (!result) {
                return next(ApiError.notFound('types not found.'));
            }
            return res.json({message: 'types deleted.'});
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new nominationController();
