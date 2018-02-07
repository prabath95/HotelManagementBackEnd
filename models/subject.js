var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
  subjectCode:{
    type: String,
    required: true
  },
  subjectName: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('subject', subjectSchema);
