var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var db = require('../models');

module.exports = function(app){

//this allows the user id to be saved within the session 
//saved as req.session.passport.user = {id:'..'} 
//that goes into the function as id in deserializeUser
  passport.serializeUser(function(user, done){
    done(null, user.id);
  })

  //after user id is saved within the session after serializer,
  //it is then used to retrieve the whole object via the deserializeUser function 
  //In deserializeUser that key is matched with the in memory array / database or any data resource.
  //The fetched object is attached to the request object as req.user
  passport.deserializeUser(function(id, done){
    db.User.find({where:{id:user.id}}), (function(user){
      done(null, user);
    }).error(function(err){
      done(err, null)
    })
  })

  //Authentication function to find if user exist to use for loging in
  passport.use("local", new localStrategy({
      usernameField: "email",
      passwordField: "password"
    },
    function(userName, password, done){
      db.User.findOne({where:{email:userName}}), (function(err, user){
        if(err) { return done(err); }
        if (!user) {return done(null, false, { message: 'Incorrect username.' });}
        if (!user.validPassword(password)) {return done(null, false, { message: 'Incorrect password.' });}
        console.log("I am logged in!!!!")
        return done(null, user);

      });
    }
  ));

    // Authentication function to create new user in the localStrategy
    //in this case localStrategy is Mysql database
    //pasReqToCallback takes care of any other attributes addedd to user
  passport.use('local-signup', new localStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password'
  },
      function(req, username, password, done){
        console.log(req.body.userName +" hereeeeee");
        console.log(" ")
        db.User.create({
          name: req.body.userName,
          email: username,
          password: password,
          zipcode: req.body.zipcode
        }).then(function(user) {
          user.userName = req.body.userName
          user.zipcode = parseInt(req.body.zipcode);
          user.save();
          return done(null, user);
        }).catch(function() {
          return done(null, false);
        });
      }
  ));
}