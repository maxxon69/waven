const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const required = true;
const schema = new mongoose.Schema({
    image: {
        type: String,
        required
    },
    season: {
        type: Schema.Types.ObjectId,
        ref: "Season",
        required
    },
    rarity: {
        type: Schema.Types.ObjectId,
        ref: "Rarity",
        required
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: "Type",
        required
    },
    max_lvl: {
        type: Number,
        default: 50
    },

    text: {
        en: {
            name: {
                type: String,
                required
            }
        },
        fr: {
            name: {
                type: String,
                required
            }
        },
        es: {
            name: {
                type: String,
                required
            }
        },
        pt: {
            name: {
                type: String,
                required
            }
        },
        de: {
            name: {
                type: String,
                required
            }
        }
    },


});

module.exports = mongoose.model('Item', schema);
