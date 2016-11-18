
// create,update,delete-CRUD functions
var Representative  = require('../models')['Representative'];
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', function(req,res) {
  Representative.findAll({})
    .then(function(result){
      var repObject = {repList: result};
      console.log(repObject);
      res.render('index', repObject);
    }); 
});
  
module.exports = router; 


// router.post('/users/create', function(req, res){
  
//   var newUser = req.body;
//   User.create ({
//     name: newUser.name,
//     zipcode: newUser.zipcode,
//     email: newUser.email,
//     password: newUser.password
//   });
//   res.redirect('/index');
// });

// module.exports = router;