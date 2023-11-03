const mongoose = require('mongoose');
const required = true;
const schema = new mongoose.Schema({
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
    color: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Rarity', schema);
const data = {
    "text": {
        "en": {
            "name": "Infinite"
        },
        "fr": {
            "name": "Infinite"
        },
        "es": {
            "name": "Infinite"
        },
        "pt": {
            "name":  "Infinite"
        },
        "de": {
            "name": "Infinite"
        }


    },
    "color": "#ffffff"
}
