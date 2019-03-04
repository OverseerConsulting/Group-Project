let jsonString;
const util = require('util')
let mongoose = require('mongoose');
let databaseURL = "mongodb://localhost/test";

function writeToMongodb(fileName) {
  console.log(fileName)
  let Methods = require('./csvtojson.js');
  let flaggedWordsSchema = require('./jsontomongoschema.js');
  let outputJSON = Methods.outputJSON;
  let inputCSVFile = Methods.inputCSVFile;
  let fileFormat = fileName.substr(fileName.lastIndexOf("."));

  if (fileFormat == ".txt" || fileFormat == ".csv") {

    let rawFile = fileName.substring(fileName.lastIndexOf("/") + 1);
    let collectionName = rawFile.substring(0, rawFile.indexOf("."));
    //Set up default mongoose connection
    mongoose.connect(databaseURL, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    let db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    flaggedWordsSchema.set('collection', "flaggedwords");

    mongoose.model("integrationtest", flaggedWordsSchema);

    let output = mongoose.model("flaggedwords", flaggedWordsSchema);

    // Save the new model instance, passing a callback
    //console.log("file://" + fileName);
    jsonString = outputJSON(inputCSVFile("file://" + fileName));
    console.log(util.inspect(jsonString, {showHidden: false, depth: null}))
    saveData(output);
  }
}

async function saveData(input) {
  try {
    await input.insertMany(jsonString)
    mongoose.disconnect();
  }
  catch (e) {
    console.log(e);
  }
}

module.exports = { writeToMongodb };