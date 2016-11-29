var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var db = require('../models');


module.exports = function(app){


passport.serializeUser(function(user, done){
  done(null, user.id);
})

passport.deserializeUser(function(id, done){
  db.User.find({where:{id:user.id}}), (function(user){
    done(null, user);
  }).error(function(err){
    done(err, null)
  })
})

//Authentication function 
passport.use("local", new localStrategy({
    usernameField: "email",
    passwordField: "password"
  },
  function(userName, password, done){
    db.User.findOne({where:{email:userName}}), (function(err, user){
      if(err) { return done(err); }
      if (!user) {return done(null, false, { message: 'Incorrect username.' });}
      if (!user.validPassword(password)) {return done(null, false, { message: 'Incorrect password.' });}
      return done(null, user);
    });
  }
));

 passport.use('local-signup', new localStrategy({
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password'
    },
    function(req, username, password, done){
      models.user.create({
        email: username,
        password: password
      }).then(function(user) {
        return done(null, user);
      }).catch(function() {
        return done(null, false);
      });
    }
  ));
}