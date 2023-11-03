const mongoose = require('mongoose');
const required = true;
const schema = new mongoose.Schema({
    text: {
        en: {
            name: {
                type: String, required
            },
            html: {
                type: String,
                required
            }
        },
        fr: {
            name: {
                type: String, required
            },
            html: {
                type: String,
                required
            }
        },
        es: {
            name: {
                type: String, required
            },
            html: {
                type: String,
                required
            }
        },
        pt: {
            name: {
                type: String, required
            },
            html: {
                type: String,
                required
            }
        },
        de: {
            name: {
                type: String, required
            },
            html: {
                type: String,
                required
            }
        }


    },

});

module.exports = mongoose.model('TextTemplate', schema);
const data = {
    "text": {
        "en": {
            "name": "eqip_hero_atk",
            "html":"+{value}% ATTACK to your hero."
        },
        "fr": {
            "name": "eqip_hero_atk",
            "html":"+{value}% ATTACK to your hero."
        },
        "es": {
            "name": "eqip_hero_atk",
            "html":"+{value}% ATTACK to your hero."
        },
        "pt": {
            "name":  "eqip_hero_atk",
            "html":"+{value}% ATTACK to your hero."
        },
        "de": {
            "name": "eqip_hero_atk",
            "html":"+{value}% ATTACK to your hero."
        }


    },
}
