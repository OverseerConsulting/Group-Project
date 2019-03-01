var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
    document: String,
    status: String,
    score: Number,
    time_started: String,
    time_finished: String,
    wordCount: String,
    flaggedWordsList: String,
    flaggedWordCount: String,
    flagPercent: String,
    rank: String,
    words: [{
        word: String,
        count: Number
    }]
});
module.exports = mongoose.model('reports', reportSchema);