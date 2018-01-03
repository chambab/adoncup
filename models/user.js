
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var User = new Schema({
	email: String,
	password: String,
	created: { type: Date, default: Date.now},
	admin: { type: Boolean, default: false }
});

// compare password
User.methods.comparePassword = function(password) {
	//console.log(this.password);
	//console.log(password);
	console.log('Authentication : ' + bcrypt.compareSync(password, this.password));
	return bcrypt.compareSync(password, this.password);
};

/*
// create new User document
User.statics.create = function(email, password) {
	//var user = new User();
	this.email = email;
	this.password = password;
	console.log(this.email);
	//return user.save();
	return user.save();
};

// find one user by using email
User.statics.findOneByUsername = function(email) {
//	return this.findOne({email}).exec();
};

User.methods.verify = function(password) {
	return this.password == password;
};

User.methods.assignAdmin = function() {
	this.admin = true;
	return this.save();
};

*/
module.exports = mongoose.model('User', User);
