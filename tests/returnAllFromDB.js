let databaseURL = "mongodb://localhost/test";

async function outputData() {
  return new Promise(function (resolve, reject) {
    let mongoose = require('mongoose');
    mongoose.connect(databaseURL, { useNewUrlParser: true });

    let Schema = require("./jsontomongoschema"); //call model
	Schema.set('collection', "integrationtest");
	let Model = mongoose.model("integrationtest", Schema);
	
    // get all the names
    Model.find({}, { Name: 1, Score: 1, _id: 0 }, function (err, Model) {
      if (err) throw err;

      // object of all the names
      resolve(Model);
    });
  })
}
async function app() {
  let returnList = await outputData()
  return returnList;
}
//app();
module.exports = { app }