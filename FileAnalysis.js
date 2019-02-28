let DB = require('./returnAllFromDB.js');

async function analyseDocument(document) {

    let flaggedWords = [];

    await DB.app().then(function (value) {
        flaggedWords = value;
    });

    let report = {};
    report.document = document.name;

    let wordCount = 0;
    let flaggedWordCount = 0;
    let score = 0;

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    report.time_started = date + time;
    let words = [];

    document.words.forEach(function (docWord) {
        wordCount = wordCount + docWord.count;

        flaggedWords.forEach(function (flagWord) {
            if (docWord.word.toLowerCase() == flagWord.Name.toLowerCase()) {
                words.push({ word: docWord.word, count: docWord.count });
                score = score + (docWord.count * flagWord.Score);
                flaggedWordCount = flaggedWordCount + docWord.count;
            }
        })
    });
    report.wordCount = wordCount;
    report.score = score;
    report.flaggedWordCount = flaggedWordCount;
    report.flagPercent = (flaggedWordCount / wordCount).toPrecision(3);
    report.status = "analysed";

    today = new Date();
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    time = ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    report.time_finished = date + time;
    report.rank = calculateRank(report);
    report.words = words;

    postReport(report);
    return report;
}

function postReport(report) {
    db.postReport(report);
}

function calculateRank(report) {
    let wordCount = report.wordCount;
    let flaggedWordCount = report.flaggedWordCount;
    let flagPercent = report.flagPercent;
    let score = report.score;
    let myEval = 0;
    myEval = (score / flaggedWordCount) * flagPercent;

    if (myEval > 1) {
        return "Maximum Priority";
    } else if (myEval > 0.75) {
        return "High Priority";
    } else if (myEval > 0.5) {
        return "Medium Priority";
    } else if (myEval > 0.25) {
        return "Low Priority";
    } else {
        return "Lowest Priority";
    }
}

module.exports = { analyseDocument, calculateRank };