var mongoose = require('mongoose');

async function outputData(dbconnect) {
    return new Promise(function (resolve, reject) {
        var mongoose = require('mongoose');

        mongoose.connect(dbconnect, { useNewUrlParser: true });

        // grab the things we need
        var mongoose = require('mongoose');

        // we need to create a model using it
        var wordList = require("./schemas/listschema.js");

        // make this available to our users in our Node applications
        module.exports = wordList;


        // get all the names
        wordList.find({}, { name: 1, filename: 1, time_stored: 1, owner_id: 1, words: 1 },
            function (err, wordList) {
                if (err) throw err;

                // object of all the names
                resolve(wordList);
            });
    })
}
async function app(dbconnect) {
    var wordList = await outputData(dbconnect)
    mongoose.disconnect();
    console.log(wordList);
    return wordList;
}
app();

module.exports = app;