let mongoose = require('mongoose');

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