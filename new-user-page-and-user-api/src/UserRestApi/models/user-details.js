const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        defualt: ''
    },
    lastName: {
        type: String,
        defualt: ''
    },
    email: {
        type: String,
        defualt: ''
    },
     password:{
        type: String,
         defualt: ''
  },
    jobRole:{
        type: String,
        defualt: ''
  },
    clearenceLevel: {
        type: String,
        defualt: ''
  }
});

const User = mongoose.model('user-details', UserSchema);
module.exports = User;
