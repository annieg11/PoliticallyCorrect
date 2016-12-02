
// create,update,delete-CRUD functions
var Representative  = require('../models')['Representative'];
var models = require('../models')
var express = require('express');
var router  = express.Router();
var User  = require('../models')['User'];
var passport = require("passport");



var USER_SESSION = null;

function realUser (req, res, next){
  if(USER_SESSION = null){
    req.session.messages = "Login in first before doing that!";
    res.redirect('/index');
  }else{
    next();
  }
}

function signInUser(req, res, error, user, info){
   
  if(error) { return res.render(error); }
  if(!user) { return res.render(" not user"); }
  var userId = user.id;
  USER_SESSION = user;
  console.log(USER_SESSION + " USER SESSION IS OPEN");
   console.log(userId + " User id!")
  res.redirect('/index');
}



// Home Page
router.get('/', function(req, res) {
  res.redirect('/index');
});

// Get Representative Info 
router.get('/index', function(req,res) {
  Representative.findAll({})
    .then(function(result){
      var repObject = {repList: result};
      // console.log(repObject);
      res.render('index', repObject);
    }); 
});



    // route for the user to log in using authenticate
router.post('/user/login', function(req, res, next) {
  console.log("I am logged in!!!!")
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
     signInUser(req, res, error, user, info);
    
  })(req, res, next);
  res.redirect('/index');
});

//route to logout user. destroys session created when logged in 
// need to display a logoout button when logged in.
router.get('/user/logout', function(req, res) {
  req.session.destroy();
  res.status(200).end();
  USER_SESSION = null;
  res.redirect('/index');
});

//route to create a new user 
router.post('/user/create', function(req, res) {
  var name = req.body.userName;
  var zipcode = req.body.zipcode;
  var email = req.body.email;
  var password = req.body.password;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    res.render('register',{
      errors:errors
    });
  }else{
  User.create ({
    userName: name,
    zipcode: zipcode,
    email: email,
    password: password
  });
  res.redirect('/'); 
}
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


