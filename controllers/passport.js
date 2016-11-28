var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var db = require('../models');

passport.serializeUser(function(user, done){
  done(null, user);
})

passport.deserializeUser(function(user, done){
  db.User.find({where:{id:user.id}}).success(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null)
  })
})

//Authentication function 
passport.use(new localStrategy(
  function(name, password, done){
    db.User.find({where:{name:name}}).success(function(user){
      passwd = user ? user.password : ''
      isMatch = db.User.validPassword(password, passwd, done, user)
    });
  }
));