
'use strict';

var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.register = function(req, res) {
	var user = new User();
        user.email = req.body.email;
	user.password = bcrypt.hashSync(req.body.password,10);
	user.save();
};

exports.sign_in = function(req, res) {
	console.log(req.body.email + " is tring to log in..");
	User.findOne({email: req.body.email}, function(err, user) {
		if(err) {
			console.log(err);
			return res.status(500).json({error:err});
		} else if(!user) {
			return res.status(404).json({error: 'user not found'});	
		} else if(user) {
			if(user.comparePassword(req.body.password)) {
				return res.json({token: jwt.sign({
					email: user.email,
					_id: user._id}, 'RESTFULAPIs')});
			} else {
				return res.status(401).json({message: 'Authentication failed Wrong Password.'});
			}
		} else {
			res.json(user);	
		}
	});
};

exports.loginRequired = function(req, res, next) {
	if(req.user) {
		next();
	} else {
		return res.status(401).json({message: 'Unauthorized user'});
	}
};
