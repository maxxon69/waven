const TextTemplate = require('../models/TextTemplate.model');

class nominationService {
    async create(data) {
        return await TextTemplate.create(data)
    }

    async findAll() {
        return await TextTemplate.find()
    }

    async findById(id) {
        return await TextTemplate.findById(id);
    }

    async update({id, data}) {

        return await TextTemplate.findByIdAndUpdate(id, data);
    }

    async delete(id) {

        return await TextTemplate.findByIdAndDelete(id);
    }




}


module.exports = new nominationService();
