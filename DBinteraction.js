let dbconnect = 'mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true';

async function outputData(tableName) {
  return new Promise(function (resolve, reject) {
    var mongoose = require('mongoose');

    mongoose.connect(dbconnect, { useNewUrlParser: true });
    var flaggedWords = require('./models/flaggedWords.js');

    flaggedWords.find({ ListName: tableName }, function (err, flaggedWords) {
      if (err) throw err;
      resolve(flaggedWords[0]);
    });
  })
}
async function getFlaggedWords(tableName) {
  var flaggedWordsList = await outputData(tableName);
  return flaggedWordsList.Words;
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