const Rarity = require('../models/Rarity.model');

class nominationService {
    async create(data) {
        return await Rarity.create(data)
    }

    async findAll() {
        return await Rarity.find()
    }

    async findById(id) {
        return await Rarity.findById(id);
    }

    async update({id, data}) {

        return await Rarity.findByIdAndUpdate(id, data);
    }

    async delete(id) {

        return await Rarity.findByIdAndDelete(id);
    }




}


module.exports = new nominationService();
