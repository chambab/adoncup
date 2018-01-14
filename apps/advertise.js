
Advertise = require('../models/advertise');

exports.listAdvertises = function(req, res) {
};

// return an advertise searched by id
exports.getAdvertise = function(req, res) {
	Advertise.find({ad_id: req.params.ad_id}, function(err, ad) {
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

// @chambab
// update advertisement
exports.updateAd = function(req, res) {
	Advertise.findById(req.params.ad_id, function(err, ad) {
		if(err) return res.status(500).json({error: 'database failure'});
		if(!ad) return res.status(404).json({error: 'Advertise not found'});

		if(req.body.ader) ad.ader = req.body.ader;
		if(req.body.type) ad.type = req.body.type;
		if(req.body.main_txt) ad.main_txt = req.body.main_txt;
		if(req.body.sub_txt) ad.sub_txt = req.body.sub_txt;

		ad.save(Function(err) {
			if(err) res.status(500).json({error: 'failed to update ad'});
			res.json({message: 'book updated'});
		});

	});
};

// @chambab
// delete advertisement using ad_id
exports.deleteAd = function(req, res) {
	Advertise.remove({_id: req.params.ad_id}, function(err, output)) {
		if(err) return res.status(500).json({error: 'failed to delete ad'});
		res.status(204).end();
	});
};
