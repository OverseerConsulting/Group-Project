async function outputData() {
  return new Promise(function (resolve, reject) {
    let mongoose = require('mongoose');
    mongoose.connect('mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true', { useNewUrlParser: true });

    let Schema = require("../models/jsontomongoschema.js"); //call model
	Schema.set('collection', "integrationtest");
	let Model = mongoose.model("integrationtest", Schema);
	
    // get all the names
    Model.find({}, function (err, Model) {
      if (err) throw err;

      // object of all the names
      resolve(Model);
    });
  })
}
async function app() {
  let returnList = await outputData()
  const util = require('util')
  console.log(util.inspect(returnList, {showHidden: false, depth: null}))
  return returnList;
}
//app();
module.exports = { app }