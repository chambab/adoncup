
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var advertiseSchema = new Schema({
	ad_id: {type: Number, required: true, unique: true},
        ader: String,
        type: String,
        main_txt: String,
        sub_txt: String,
        start_period: { type:Date },
        end_period: { type:Date},
        credit: String,
        created_date: { type:Date, default: Date.now },
        updated_date: { type:Date },
        deleted_date: { type:Date },
        deleted: Boolean
});

advertiseSchema.statics.create = function(adver) {
	var madver = new this(adver);
	return madver.save();
};

advertiseSchema.statics.findAll = function() {
	return this.find({});
}
    
module.exports = mongoose.model('advertise', advertiseSchema);
