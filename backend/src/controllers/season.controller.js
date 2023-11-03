const ApiError = require('../errors/api.error');
const seasonService = require('../services/season.service');

class seasonController {
    async create(req, res, next) {
        try {
            const {text} = req.body;

            if (!text) {
                return next(ApiError.badRequest(''));
            }
            const season = await seasonService.create({text});
            return res.status(200).json(season);
        } catch (e) {
            next(e);
        }
    }


    async findAll(req, res, next) {
        try {
            const seasons = await seasonService.findAll();
            return res.json(seasons);
        } catch (e) {
            next(e);
        }
    }

    async findById(req, res, next) {
        try {
            const season = await seasonService.findById(req.params.id);
            if (!season) {
                return next(ApiError.notFound('season not found.'));
            }
            return res.json(season);
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
            const season = await seasonService.update({id, data});
            if (!season) {
                return next(ApiError.notFound('season not found.'));
            }
            return res.json(season);
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
            const result = await seasonService.delete(req.params.id);
            if (!result) {
                return next(ApiError.notFound('season not found.'));
            }
            return res.json({message: 'season deleted.'});
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new seasonController();
