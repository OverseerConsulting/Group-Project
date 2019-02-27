async function outputData() {
  return new Promise(function (resolve, reject) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://overseerconsulting:8YvYWBF9uSpJTql28HlPvZSfI9FhQZfFBvkmHXKC9UXsMJypN9YiEhiatHqjzFXsnkCmq63ONlBNfuqN1Y7cvA==@overseerconsulting.documents.azure.com:10255/flaggedwords?&ssl=true', { useNewUrlParser: true });

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

module.exports = { app };