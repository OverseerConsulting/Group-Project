const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    name: {
        type: String,
        required: [true],
    },
    fileName: {
        type: String,
    },
    status: {
        type: String,
    },
    score: {
        type: Number,
    },
    flaggedWordList: {
        type: String,
    },
    flaggedWords: [
        {
            name: {
                type: String,
                required: [true],
            },
            score: {
                type: Number,
            },
        },
    ],
});


const PotterReport = mongoose.model('reportDB', ReportSchema);

module.exports = PotterReport;
