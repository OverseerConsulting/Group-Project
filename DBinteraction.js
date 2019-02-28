let dbconnect = "";

async function outputData() {
  return new Promise(function (resolve, reject) {
    var mongoose = require('mongoose');

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    // we need to create a model using it
    var harrypotternames = require('./models/harrypotternames.js');

    // make this available to our users in our Node applications
    // module.exports = harrypotternames;


    // get all the names
    harrypotternames.find({}, { Name: 1, Score: 1, _id: 0 }, function (err, harrypotternames) {
      if (err) throw err;

      // object of all the names
      resolve(harrypotternames);
    });
  })
}
async function app() {
  var harrypotternames = await outputData();
  return harrypotternames;
}
//app();

async function getDocs() {
  var docs = await getMoreDocs();
  return docs;
}

async function getMoreDocs() {
  return new Promise(function (resolve, reject) {
    var mongoose = require('mongoose');
    mongoose.connect(dbconnect, { useNewUrlParser: true });
    var documentsModel = require('./models/documents.js');

    documentsModel.find({}, function (err, documentsModel) {
      if (err) throw err;

      resolve(documentsModel);
    });
  });
}

async function postReport(report) {
  await insertReport(report);
}

async function insertReport(report) {
  var mongoose = require('mongoose');
  mongoose.connect(dbconnect, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;

  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  var reportModel = require('./models/report.js');

  try {
    await reportModel.insertMany(report);
    mongoose.disconnect();
  } catch (e) {
    console.log(e);
  }
}

module.exports = { app, getDocs, postReport };