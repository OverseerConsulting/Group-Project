let mongoose = require('mongoose');

// create the schema
let flaggedWordsSchema = new mongoose.Schema({
  Name: String,
  Score: Number
});
module.exports = flaggedWordsSchema;