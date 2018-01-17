'use strict';

var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var app = express();
var apiroute = express.Router();
const port = 3000;

var bodyParser = require('body-parser');

var myLogger = function(req, res, next) {
    console.log('logged');
    next();
};

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

// authenticate middleware
var authcheck = function (req, res, next) {
    console.log("auth checking");
  if(req.headers && req.headers.authorization && req.headers.authorization.splt(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      console.log('here');
      if(err) {
        return res.json({success: false, message: 'Failed to authenticate token'});
        //req.user = undefined;
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    req.user = undefined;
    console.log(req.user);
    return res.status(403).send({ success: false, message: 'No token provided'});
    //next();
  }
};

apiroute.use(authcheck);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(myLogger);
app.use(requestTime);
//app.use(authcheck);
app.use('/api', apiroute);
app.use(morgan('dev'));
//app.use(require('body-parser'));
//app.use(express.urlencoded());
//app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost/adoncup', { useMongoClient: true });
// native Promise
mongoose.Promise = global.Promise;

// ROUTERS
var adv = require('./routes/advertises.js');
app.use('/api/v1/advertises', adv);

//var auth = require('./routes/auth.js');
// when requested on /api/v1/auth, then route it to auth
app.use('/api/v1/auth', require('./routes/auth.js'));


var server = app.listen(port, function(){
    console.log("Adoncup server has started on port 3000")
})
