const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PotterSchema = new Schema({
    name: {
        type: String,
        required: [true],
    },
    score:{
        type: Number,
    }
});

const Potter = mongoose.model('harrypotternames', PotterSchema);
module.exports = Potter;
