
Advertise = require('../models/advertise');

exports.listAdvertises = function(req, res) {
};

// return an advertise searched by id
exports.getAdvertise = function(req, res) {
	Advertise.find({ad_id: req.body.ad_id}, function(err, ad) {
		if(err) {
			console.log(err);
			return res.status(500).json({error:err});
		} else {
			return res.json(ad);
		}
	}
};

// return advertises searched by ader
exports.listAdvertisesByAder = function(req, res) {
	Advertise.find({ader: req.body.ader}, function(err, ad) {
		if(err) {
			console.log(err);
			return res.status(500).json({error:err});
		} else {
			return res.json(ad);
		}
	}
};

exports.registerAd = function(req, res) {
	var ad = new Advertise();
	ad.ader = req.body.ader;
	ad.type = req.body.type;
	ad.main_txt = req.body.main_txt;
	ad.sub_txt = req.body.sub_txt;
	ad.save();
};
// TODO
exports.updateAd = function(req, res) {
};

exports.deleteAd = function(req, res) {
};
