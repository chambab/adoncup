
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});



/*
var adSchema = new Schema({
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
var Advertise = mongoose.model('advertise', adSchema);
*/

/*
var Advertise = mongoose.model({ader:String, type:String});
var newAdd = Advertise({ader:'chambab', type:'Sales'});
newAdd.save(function (err) {
	if(err) {
		console.log("error")
	} else {
		console.log("daved")
	}
})
*/
