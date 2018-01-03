
const mongoose = require('mongoose');
const db = "mongodb://localhost/example";

//mongoose.Promise = global.Promise;
//var promise = mongoose.createConnection(db, { useMongoClient: true })

var promise = mongoose.createConnection('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});

/*
var promise = mongoose.createConnection('mongodb://localhost:27017/myapp', {
  useMongoClient: true,
});
*/

/*
promise.then(function(error,db) {
    if(error) {
        console.log("error");
    } else {
        // console.log("connected:" + db);
        db.movie.insert({"name":"test"});
        db.close();
    }
});
*/
