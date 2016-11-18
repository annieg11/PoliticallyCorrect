// create,update,delete-CRUD functions
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('index', function(req,res)){
  
  Representative.all({})
    .then(function(result){
      var repObject = {repList: result};
      res.render('index', repObject);
    });
});
  


module.exports = router;




