
var bcrypt = require('bcrypt');

//var hash = bcrypt.hashSync('abc', 10);
//console.log(hash);

bcrypt.hash('abc', 10, function(err, hash) {
	console.log(hash);
});
