var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var docSchema = new Schema({
    name: String,
    filename: String,
    time_stored: String,
    owner_id: Number,
    flaggedWordsList: String,
    words: [{
        word: String,
        count: Number
    }]
});
module.exports = mongoose.model('documents', docSchema);