var mongoose = require('mongoose');

async function outputData(dbconnect) {

    try {
        return new Promise(function (resolve, reject) {

            mongoose.connect(dbconnect, { useNewUrlParser: true });

            var wordList = require("./models/documents.js");

            module.exports = wordList;

            wordList.find({}, { name: 1, filename: 1, time_stored: 1, owner_id: 1, words: 1 },
                function (err, wordList) {
                    if (err) throw err;
                    resolve(wordList);
                });
        })
    } catch (e) {
        console.log(e);
    }
}

async function app(dbconnect) {

    try {
        var wordList = await outputData(dbconnect)
        mongoose.disconnect();
        console.log(wordList);
        return wordList;
    } catch (e) {
        console.log(e);
    }
}
app();

module.exports = app;