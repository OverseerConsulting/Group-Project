let dbconnect = '';

async function outputData() {
  return new Promise(function (resolve, reject) {
    var mongoose = require('mongoose');

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    var harrypotternames = require('./models/harrypotternames.js');

    harrypotternames.find({}, { Name: 1, Score: 1, _id: 0 }, function (err, harrypotternames) {
      if (err) throw err;
      resolve(harrypotternames);
    });
  })
}
async function getFlaggedWords() {
  var harrypotternames = await outputData();
  return harrypotternames;
}

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

async function removeReport(reportName) {
  var mongoose = require('mongoose');
  mongoose.connect(dbconnect, { useNewUrlParser: true });

  var reportModel = require('./models/report');

  try {
    await reportModel.deleteMany({ document: reportName });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getFlaggedWords, getDocs, postReport, removeReport };