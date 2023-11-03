const ApiError = require('../errors/api.error');
const textTemplateService = require('../services/textTemplate.service');
const {isTrue} = require("../utils");

class textTemplateController {
    async create(req, res, next) {
        try {
            const {

                text

            } = req.body;
            if (!isTrue([ text])) {
                return next(ApiError.badRequest(''));
            }
            const textTemplate = await textTemplateService.create({
                text
            });
            return res.status(200).json(textTemplate);
        } catch (e) {
            next(e);
        }
    }


    async findAll(req, res, next) {
        try {
            const textTemplates = await textTemplateService.findAll();
            return res.json(textTemplates);
        } catch (e) {
            next(e);
        }
    }

    async findById(req, res, next) {
        try {
            const textTemplate = await textTemplateService.findById(req.params.id);
            if (!textTemplate) {
                return next(ApiError.notFound('textTemplates not found.'));
            }
            return res.json(textTemplate);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const {id, data} = req.body;
            console.log('received',data)
            if (!id || !data) {
                return next(ApiError.badRequest(''))
            }
            const textTemplate = await textTemplateService.update({id, data});
            console.log('updated', textTemplate)
            if (!textTemplate) {
                return next(ApiError.notFound('textTemplate not found.'));
            }
            return res.json(textTemplate);
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
            const result = await textTemplateService.delete(req.params.id);
            if (!result) {
                return next(ApiError.notFound('textTemplates not found.'));
            }
            return res.json({message: 'textTemplates deleted.'});
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new textTemplateController();
