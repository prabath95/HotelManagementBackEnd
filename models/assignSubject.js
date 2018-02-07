var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssignSchema = new Schema({
  studentEmail:{
    type: String,
    required: true
  },
  subjectName:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('assignSubject', AssignSchema);
