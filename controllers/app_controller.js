
// create,update,delete-CRUD functions
var Representative  = require('../models')['Representative'];
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

// router.post('/user/create', function(req, res) {
//   var newUser = req.body;
//   User.create ({
//     name: newUser.name,
//     zipcode: newUser.zipcode,
//     email: newUser.email,
//     password: newUser.password
//   });
//   res.redirect('/'); 
// });;

module.exports = router; 


