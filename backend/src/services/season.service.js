const Season = require('../models/Season.model');

class nominationService {
    async create(data) {
        return await Season.create(data)
    }

    async findAll() {
        return await Season.find({}).lean()
    }

    async findById(id) {
        return await Season.findById(id).lean();
    }

    async update({id, data}) {

        return await Season.findByIdAndUpdate(id, data).lean();
    }

    async delete(id) {

        return await Season.findByIdAndDelete(id);
    }




}


module.exports = new nominationService();
