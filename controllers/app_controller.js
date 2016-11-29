
// create,update,delete-CRUD functions
var Representative  = require('../models')['Representative'];
var models = require('../models')
var express = require('express');
var router  = express.Router();
var User  = require('../models')['User'];
var passport = require("passport");

// Home Page
router.get('/', function(req, res) {
  res.redirect('/index');
});

// Get Representative Info 
router.get('/index', function(req,res) {
  Representative.findAll({})
    .then(function(result){
      var repObject = {repList: result};
      console.log(repObject);
      res.render('index', repObject);
    }); 
});

function signInUser(req, res, error, user, info){
  if(error) { return res.status(500).json(error); }
  if(!user) { return res.status(401).json(info.message); }
  var userId = user.id;
  res.redirect('/index');
}

router.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

router.post('/user/signup', function(req, res, next){
  passport.authenticate('local-signup', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

router.get('/user/logout', function(req, res) {
  req.session.destroy();
  res.status(200).end();
});


router.get('/:zipCode', function(req,res){
  var zip = req.params.zipCode;
  console.log(zip + "hereeeeee")
  models.Districts.findOne({where: {zipCode:zip }})
  .then(function(rep){
    console.log(rep.districtNum)
    models.Representative.findOne({where: {districtNum:rep.districtNum }})
    .then(function(response){
      res.json(response)
    })
    // res.json(rep)
  })
})

  
module.exports = router; 


