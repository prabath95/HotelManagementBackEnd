var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName:{
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  age:{
    type: Number,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  role:{
    type: String,
    required: true
  },
  gendar:{
    type: String,
    required: true
  },
  speciality:{
    type: String,
  },
  hospital:{
    type: String,
  }
});

module.exports = mongoose.model('User', UserSchema);
