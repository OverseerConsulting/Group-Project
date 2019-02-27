var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var hpnSchema = new Schema({
    Name: String,
    Score: Number
});
module.exports = mongoose.model('harrypotternames', hpnSchema);