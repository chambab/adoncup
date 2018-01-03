
'use strict';

var express = require('express');
var router = express.Router();
//var User = require('../models/user');
var userapp = require('../apps/auth');

// list all of avertisement
// GET api/v1/auth/
router.get('/', function(req, res) {
    //var user = User.findOneByUsername('test');
    //res.send('Hello /api/v1/auth/');
    //res.send('find successfully: ${adver}' );
    userapp.register(req, res);
});


// OK POST api/v1/auth/register
router.post('/register', function(req, res) {
    userapp.register(req, res);
});

// OK POST api/v1/auth/login
router.post('/login', function(req, res) {
    userapp.sign_in(req, res);
});

module.exports = router
