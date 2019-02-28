var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listSchema = new Schema({
    name: String,
    filename: String,
    time_stored: String,
    owner_id: Number,
    words: [{
        word: String,
        count: Number
    }]
});

module.exports = mongoose.model("wordlist", listSchema);