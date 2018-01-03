
'use strict';

var express = require('express');
var router = express.Router();
//var Advertise = require('../models/advertise');
var adapp = require('../apps/advertise');

// list all of avertisement
router.get('/', function(req, res) {
    //var adver = Advertise.findAll();
    //res.send('Hello /api/v1/advertises/');
    //res.send('find successfully: ${adver}' );
	adapp.listAdvertises(req, res);
});

// Get specific ad
router.get('/:ad_id', function(req, res) {
    //res.send('Hello /api/v1/advertises/:ad_id');
	adapp.getAdvertise(req, res);
});

// list advertise of ader
router.get('/ader/:ader', function(req, res) {
    //res.send('Hello /api/v1/advertises/ader/:ader');
	adapp.listAdvertisesByAder(req, res);
});

// list advertise of ader
router.post('/', function(req, res) {
    //res.send('Hello POST /api/v1/advertises');
	adapp.registerAd(req, res);
});

// Update advertisement
router.put('/:ad_id', function(req, res) {
    //res.send('Hello PUT /api/v1/advertises/:ad_id');
	adapp.updateAd(req, res);
});

// Update advertisement
router.delete('/:ad_id', function(req, res) {
    //res.send('Hello DELETE /api/v1/advertises/:ad_id');
	adapp.deleteAd(req, res);
});

module.exports = router
