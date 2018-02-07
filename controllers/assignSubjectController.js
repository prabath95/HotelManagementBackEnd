'user strict'

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var modalAssign = require('../models/assignSubject');

router.use(bodyParser.json());
//--------------------------------------------Assign Subject---------------------------------------------------------------
router.post('/assign/new', function (req, res) {
    var assign = new modalAssign();
    assign.studentEmail = req.body.studentEmail;
    assign.subjectName = req.body.subjectName;

    modalAssign.find({ studentEmail: req.body.studentEmail }, function (error, assignSubjects) {
        if (error) {
            res.json({
                success: false,
                msg: 'Unknown Error'
            });
        }
        if (assignSubjects == null || assignSubjects.length == 0 || assignSubjects == undefined) {
            assign.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({
                    success: true,
                    msg: 'Booking Sucessful'
                });
            });
        } else {
            var isAssigned = true;
            for (var i = 0; i < assignSubjects.length; i++) {
                if (assignSubjects[i].subjectName == req.body.subjectName) {
                    isAssigned = false;
                    res.json({
                        success: false,
                        msg: 'this Subject Already Assigned'
                    });
                    break;
                }
                
            }
            if (isAssigned) {
                assign.save(function (err) {
                    if (err) {
                        res.send(err);
                    }
                    res.json({
                        success: true,
                        msg: 'Booking Sucessful'
                    });
                });
            }
        }

    });
});

router.post('/subject/getSubjects', function(req,res) {
    modalAssign.find(function(err,assign){
        if(err){
            res.json({
                success:false,
                msg:'Error when getting subjects'
            });
        }
        else {
            for(var i = 0; i<assign.length; i++){
                if(assign[i].studentEmail != req.body.email){
                    assign.splice(i,1);
                }
            }
            res.json(assign);
        }
    });
});

module.exports = router; 