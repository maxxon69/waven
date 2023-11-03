const ItemCharacteristic = require('../models/ItemCharacteristic.model');

class nominationService {
    async create(data) {
        return await ItemCharacteristic.create(data)
    }

    async createMany({id, data}) {
        for (const characteristic in data) {
            console.log({data, characteristic})
            await ItemCharacteristic.create({item: id, ...data[characteristic]})

        }
        return 'ok'
    }

    async findAll() {
        return await ItemCharacteristic.find()
    }

    async findById(id) {
        return await ItemCharacteristic.findById(id);
    }

    async findByItem(item, templates) {
        if (templates==='true')
            return await ItemCharacteristic.find({item}).populate('template').lean();
        return await ItemCharacteristic.find({item}).lean();
    }

    async update({id, data}) {

        return await ItemCharacteristic.findByIdAndUpdate(id, data);
    }

    async updateMany(data) {
        for (const item of data) {
            await ItemCharacteristic.findByIdAndUpdate(item._id, item);
        }
        return 'ok'
    }

    async delete(id) {

        return await ItemCharacteristic.findByIdAndDelete(id);
    }


    async deleteMany(ids) {
        for (const id of ids) {
            await ItemCharacteristic.findByIdAndDelete(id);
        }
        return 'ok'
    }


}


module.exports = new nominationService();
