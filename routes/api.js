const express = require('express');
const router = express.Router();

// connect mongodb
const MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

router.get('/mome', function(req, res){
  // connect server
  MongoClient.connect('mongodb://13.65.88.78:27017/mydb', function(err, db) {
    if(err) throw err;

    var collection = db.collection('test_insert');
    collection.find({}).toArray(function(err, result){
      if(err) throw err;
      console.log(result);
      db.close();
    });
  });
});


module.exports = router;
