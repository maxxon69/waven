const ApiError = require('../errors/api.error');
const typeService = require('../services/type.service');

class typeController {
    async create(req, res, next) {
        try {
            const {text, img} = req.body;

            if (!text || !img) {
                return next(ApiError.badRequest(''));
            }
            const type = await typeService.create({text, img});
            return res.status(200).json(type);
        } catch (e) {
            next(e);
        }
    }


    async findAll(req, res, next) {
        try {
            const types = await typeService.findAll();
            return res.json(types);
        } catch (e) {
            next(e);
        }
    }

    async findById(req, res, next) {
        try {
            const type = await typeService.findById(req.params.id);
            if (!type) {
                return next(ApiError.notFound('type not found.'));
            }
            return res.json(type);
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
            const type = await typeService.update({id, data});
            if (!type) {
                return next(ApiError.notFound('type not found.'));
            }
            return res.json(type);
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
            const result = await typeService.delete(req.params.id);
            if (!result) {
                return next(ApiError.notFound('type not found.'));
            }
            return res.json({message: 'type deleted.'});
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new typeController();
