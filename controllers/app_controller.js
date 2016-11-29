
// create,update,delete-CRUD functions
var Representative  = require('../models')['Representative'];
var models = require('../models')
var express = require('express');
var router  = express.Router();
var User  = require('../models')['User'];

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

router.post('/user/create', function(req, res) {
  var newUser = req.body;
  User.create ({
    userName: newUser.userName,
    zipcode: newUser.zipcode,
    email: newUser.email,
    password: newUser.password
  });
  res.redirect('/'); 
});;


router.get('/rep/:zipCode', function(req,res){
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

// router.get('/rep/:zipcode', function(req,res) {
//   Representative.findAll({})
//     .then(function(result){
//       var repObject = {repList: result};
//       console.log(repObject);
//       res.render('index', repObject);
//     }); 
// });

  
module.exports = router; 


