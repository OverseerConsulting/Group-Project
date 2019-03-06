async function outputData() {
  return new Promise(function (resolve, reject) {
    let mongoose = require('mongoose');
    mongoose.connect('mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true', { useNewUrlParser: true });

    let Schema = require("../models/jsontomongoschema.js");
	Schema.set('collection', "integrationtest");
	let Model = mongoose.model("integrationtest", Schema);
	
    Model.find({}, function (err, Model) {
      if (err) throw err;

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
module.exports = { app }