'user strict'

var cors=require('cors');
var mongoose = require('mongoose');

var express = require('express');
var config = require('./config/config');
var userRoute = require('./controllers/usersController');
var subjectRoute = require('./controllers/subjectController');
var assignRoute = require('./controllers/assignSubjectController');

var server = express();
const server_port = config.web_port;
server.use(cors());
server.use(userRoute);
server.use(subjectRoute);
server.use(assignRoute);
server.use(express.static(__dirname));

mongoose.connect('mongodb://localhost:27017/HospitalManagement');
var database = mongoose.connection;

server.get('/', (req, res, next) => {
    console.log("Error !!!");
});

server.listen(server_port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('server listening on port : '+server_port);
});


