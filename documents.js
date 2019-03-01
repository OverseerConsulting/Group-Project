var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var docSchema = new Schema({
    name: String,
    filename: String,
    time_stored: String,
    owner_id: Number,
    words: [{
        word: String,
        count: Number
    }]
});

module.exports = mongoose.model("document", docSchema);