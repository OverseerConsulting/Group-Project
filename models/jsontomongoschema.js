let mongoose = require('mongoose');

// create the schema
let flaggedWordsSchema = new mongoose.Schema({
  ListName: String,
  Words: [
    {
    Word: String,
    Score: Number
  }
  ]
});
module.exports = flaggedWordsSchema;