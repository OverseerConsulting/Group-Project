var mongoose = require('mongoose');
var pdfmodel = require("./models/pdfschema.js");
var listmodel = require("./models/documents.js");

async function writeToMongodb(dbconnect, inputJson) {

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    try {
        await pdfmodel.insertMany(inputJson)
        mongoose.disconnect();
    }
    catch (e) {
        console.log(e);
    }
}

async function writeListToMongodb(dbconnect, inputJson) {

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    var db = mongoose.connection;
    mongoose.Promise = global.Promise;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    try {
        await listmodel.insertMany(inputJson)
        mongoose.disconnect();
    }
    catch (e) {
        console.log(e);
    }
}

async function deleteAllFromMongodb(dbconnect) {

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    try {
        await pdfmodel.deleteMany();
        mongoose.disconnect();
    }
    catch (e) {
        console.log(e);
    }
}

async function deleteListsFromMongodb(dbconnect) {

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    try {
        await listmodel.deleteMany();
        mongoose.disconnect();
    }
    catch (e) {
        console.log(e);
    }
}

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


module.exports = { writeToMongodb, writeListToMongodb, deleteAllFromMongodb, deleteListsFromMongodb, app };