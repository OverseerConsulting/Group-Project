//Import the mongoose module
function writeToMongodb(fileName) {
  var mongoose = require('mongoose');
  var Methods = require('./csvtojson.js');
  var outputJSON = Methods.outputJSON;
  var inputCSVFile = Methods.inputCSVFile;
  var fileFormat = fileName.substr(fileName.length - 4);

  if (fileFormat == ".txt" || fileFormat == ".csv") {
    collectionName = fileName.substring(fileName.lastIndexOf("/") + 1).substring(0, fileName.length-4);

    //Set up default mongoose connection
    mongoose.connect('mongodb://overseerconsulting:8YvYWBF9uSpJTql28HlPvZSfI9FhQZfFBvkmHXKC9UXsMJypN9YiEhiatHqjzFXsnkCmq63ONlBNfuqN1Y7cvA==@overseerconsulting.documents.azure.com:10255/flaggedwords?&ssl=true',{useNewUrlParser: true});
    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    //Define a schema
    var Schema = mongoose.Schema;

    var flaggedWordsSchema = new Schema({
      Name: String,
      Score: Number
    });

    flaggedWordsSchema.set('collection', collectionName);

    var Output = mongoose.model(collectionName, flaggedWordsSchema);

    // Save the new model instance, passing a callback
    console.log("file://"+fileName);
    var jsonString = outputJSON(inputCSVFile("file://"+fileName));
    saveData();
    async function saveData() {
      try {
        await Output.insertMany(jsonString)
        mongoose.disconnect();
      }
      catch (e) {
        console.log(e);
      }
    }
  }
}

module.exports = { writeToMongodb };