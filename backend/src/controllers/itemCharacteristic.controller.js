const ApiError = require('../errors/api.error');
const itemCharacteristicService = require('../services/itemCharacteristic.service');

class itemCharacteristicController {
    async create(req, res, next) {
        try {
            const {item, bonus, rune_cost, value_type, template, value, deck} = req.body;

            if (!bonus || !template) {
                return next(ApiError.badRequest(''));
            }
            const itemCharacteristic = await itemCharacteristicService.create({
                item,
                bonus,
                rune_cost,
                value_type,
                template,
                value,
                deck
            });
            return res.status(200).json(itemCharacteristic);
        } catch (e) {
            next(e);
        }
    }

    async createMany(req, res, next) {
        console.log(1111)
        try {
            const {id, data} = req.body;

            if (!id || !data) {
                return next(ApiError.badRequest(''));
            }
            const itemCharacteristic = await itemCharacteristicService.createMany({id, data});
            return res.status(200).json(itemCharacteristic);
        } catch (e) {
            next(e);
        }
    }


    async findAll(req, res, next) {
        try {
            const itemCharacteristics = await itemCharacteristicService.findAll();
            return res.json(itemCharacteristics);
        } catch (e) {
            next(e);
        }
    }

    async findById(req, res, next) {
        try {
            const itemCharacteristic = await itemCharacteristicService.findById(req.params.id);
            if (!itemCharacteristic) {
                return next(ApiError.notFound('itemCharacteristics not found.'));
            }
            return res.json(itemCharacteristic);
        } catch (e) {
            next(e);
        }
    }

    async findByItem(req, res, next) {
        try {
            const {id} = req.params
            const {templates} = req.query
            console.log(id)
            const itemCharacteristic = await itemCharacteristicService.findByItem(id, templates);
            if (!itemCharacteristic) {
                return next(ApiError.notFound('itemCharacteristics not found.'));
            }
            return res.json(itemCharacteristic);
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
            const itemCharacteristic = await itemCharacteristicService.update({id, data});
            if (!itemCharacteristic) {
                return next(ApiError.notFound('itemCharacteristic not found.'));
            }
            return res.json(itemCharacteristic);
        } catch (e) {
            next(e);
        }
    }

    async updateMany(req, res, next) {
        try {
            const {data} = req.body;
            console.log({toupdate: data})
            if (!data) {
                return next(ApiError.badRequest())
            }
            const itemCharacteristic = await itemCharacteristicService.updateMany(data);
            if (!itemCharacteristic) {
                return next(ApiError.notFound('itemCharacteristic not found.'));
            }
            return res.json(itemCharacteristic);
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
            const result = await itemCharacteristicService.delete(req.params.id);
            if (!result) {
                return next(ApiError.notFound('itemCharacteristics not found.'));
            }
            return res.json({message: 'itemCharacteristics deleted.'});
        } catch (e) {
            next(e);
        }
    }

    async deleteMany(req, res, next) {
        try {
            const {ids} = req.body
            console.log(req.body)
            const result = await itemCharacteristicService.deleteMany(ids);
            if (!result) {
                return next(ApiError.notFound('itemCharacteristics not found.'));
            }
            return res.json({message: 'itemCharacteristics deleted.'});
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new itemCharacteristicController();
