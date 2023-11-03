const mongoose = require('mongoose');
const required = true;
const schema = new mongoose.Schema({
    text: {
        en: {
            name:{
                type: String,
                required
            }
        },
        fr: {
            name:{
                type: String,
                required
            }
        },
        es: {
            name:{
                type: String,
                required
            }
        },
        pt: {
            name:{
                type: String,
                required
            }
        },
        de: {
            name:{
                type: String,
                required
            }
        }


    },
    img:{
        type:String,
        default:''
    }
});

module.exports = mongoose.model('Season', schema);
