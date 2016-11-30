
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
  if(error) { return res.render(error); }
  if(!user) { return res.render(" not user"); }
  var userId = user.id;
  res.redirect('/index');
}
    // route for the user to log in using authenticate
router.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

/*route for adding new user to sign up
When the user submits the login form, 
a POST request to /login is made resulting in the execution of the  
passport.authenticate middleware we've set up.*/
router.post('/user/signup', function(req, res, next){
  console.log(req.body);
  passport.authenticate('local-signup', function(error, user, info) {
    // signInUser(req, res, error, user, info);
  })(req, res, next);
  res.redirect('/index');
});

//route to logout user. destroys session created when logged in 
// need to display a logoout button when logged in.
router.get('/user/logout', function(req, res) {
  req.session.destroy();
  res.status(200).end();
});

//route to create a new user 
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

// router.get('/rep/:zipcode', function(req,res) {
//   Representative.findAll({})
//     .then(function(result){
//       var repObject = {repList: result};
//       console.log(repObject);
//       res.render('index', repObject);
//     }); 
// });

  
module.exports = router; 


