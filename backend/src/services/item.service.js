const Item = require('../models/Item.model');

class nominationService {
    async create(data) {
        return await Item.create(data)
    }

    async findAll(filter) {
        return await Item.find(filter).lean()
    }

    async findById(id) {
        return await Item.findById(id);
    }

    async update({id, data}) {

        return await Item.findByIdAndUpdate(id, data);
    }

    async delete(id) {

        return await Item.findByIdAndDelete(id);
    }




}


module.exports = new nominationService();
