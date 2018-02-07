'user strict'

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var modalSubject = require('../models/subject');

router.use(bodyParser.json());
//--------------------------------------------Add Subject---------------------------------------------------------------
router.post('/subject/new', function(req, res) {
    var subject = new modalSubject();
    subject.subjectCode = req.body.subjectCode;
    subject.subjectName = req.body.subjectName;
    modalSubject.findOne({subjectCode:req.body.subjectCode},function(error,subjectresult){
        if(error){
            res.json({
                success:false,
                msg:'Unknown Error'
            });
        }
        else if(subjectresult == null || subjectresult == undefined){
            subject.save(function(err) {
                if (err) {
                res.send(err); // comment
                }
                res.json({
                    success:true,
                    msg:'Subject Created successful'
                });
            });
        }else{
            res.json({
                success:false,
                msg:'Subject Already Exist'
            });
        }
    });
  });


//--------------------------------------------GET ALL subjects---------------------------------------------------------------
router.get('/subject/getall', function(req,res) {
    modalSubject.find(function(err,subjects){
        if(err){
            res.json({
                success:false,
                msg:'Error when getting subjects'
            });
        }
        else {
            res.json(subjects);
        }
    });
});

module.exports = router; 