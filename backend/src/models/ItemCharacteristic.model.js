const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const required = true;
const schema = new mongoose.Schema({
    item: {
        type: ObjectId, required, index: true
    },
    bonus: {
        type: String,
        enum: ['default', 'rune'],
        required
    },
    rune_cost: {
        type: Number,
        nullable: true
    },
    value_type: {
        type: String,
        enum: ['per_lvl', 'fixed'],
        required
    },
    template: {
        type: ObjectId,
        ref: "TextTemplate",
        required
    },
    value: {
        type: Number,
        required
    },
    deck: {
        type: Number,
        nullable: true
    }
});

module.exports = mongoose.model('ItemCharacteristic', schema);
