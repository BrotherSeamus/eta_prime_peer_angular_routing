var express = require('express');
var router = express.Router();
var db = require('../data/mongo.js');

/* GET channel listing. */
router.get('/', function(req, res, next) {
  var results = db.channels.find({purpose:{$exists:false}});
  var array = results.toArray(function(err, arr) {
    var doc = arr;
    res.send(doc);
  });
});

router.get('/wishlist', function(req, res, next) {
  var results = db.channels.find({purpose:{$exists:true}});
  var array = results.toArray(function(err, arr) {
    var doc = arr;
    res.send(doc);
  });
});

/*POST channel wishlist*/
router.post('/', function(req, res, next) {
  db.channels.insert(req.body.newChannel);
  console.log(req.body.newChannel);
  var results = db.channels.find({purpose:{$exists:true}});
  var array = results.toArray(function(err, arr) {
    var doc = arr;
    res.send(doc);
  });
})

module.exports = router;
