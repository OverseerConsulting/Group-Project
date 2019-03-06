const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  fistName: {
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

UsersSchema.methods.generateHash = function(password) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UsersSchema.methods.validatePassword = async function(password) {
  const hash = await bcrypt.compareSync(password, this.password)
  return hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

mongoose.model('Users', UsersSchema);