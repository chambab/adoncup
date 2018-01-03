
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adoncup', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Advertise = require('./models/advertise');

/*
var ad = new Advertise({
	ader: "test",
	type: "tpe",
	main_txt: "main"
});
*/
var ad = new Advertise();
ad.ader = "test";
ad.type = "type";
ad.main_txt = "test";

ad.save(function(err){
    if(err) {
	console.error(err);
    } else {
	console.log("success");
    }
});
