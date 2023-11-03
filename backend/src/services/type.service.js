const Type = require('../models/Type.model');

class nominationService {
    async create(data) {
        return await Type.create(data)
    }

    async findAll() {
        return await Type.find({}).lean()
    }

    async findById(id) {
        return await Type.findById(id).lean();
    }

    async update({id, data}) {

        return await Type.findByIdAndUpdate(id, data).lean();
    }

    async delete(id) {

        return await Type.findByIdAndDelete(id);
    }




}


module.exports = new nominationService();
