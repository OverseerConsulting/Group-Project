var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flaggedWordsSchema = new Schema({
    ListName: String,
    Words: [{
        Word: String,
        Score: Number
    }]
})
module.exports = mongoose.model('flaggedwords', flaggedWordsSchema);