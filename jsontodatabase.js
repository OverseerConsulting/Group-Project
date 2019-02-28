var mongoose = require('mongoose');
var pdfmodel = require("./schemas/pdfschema.js");
var listmodel = require("./schemas/listschema.js");

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

module.exports = { writeToMongodb, writeListToMongodb, deleteAllFromMongodb, deleteListsFromMongodb };