var express = require('express');
var router = express.Router();


var name    = 'Edward Whitley';
var twitter = 'edwardwhitley.co.uk';
var github  = 'https://www.github.com/L3gomancer';
var blurb   = 'Technophile';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/ed.pug', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
