var mongoose    = require('mongoose'),
    consts      = require('./consts');

mongoose.connect(consts.MLAB); /*db connection*/

    book        = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        rank: {
            type: Number,
            min: 1,
            max: 10 
        },
        author: {
            name: {
                type: String,
                requires: true
            },
            age:{
                type: Number,
                min : 10
            },
            nationality: String,
            rank: {
                type: Number,
                min: 1,
                max: 10 
            }
        }
    });

    module.exports = mongoose.model('Book', book);
