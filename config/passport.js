var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');


// SERIALIZATION:
//  This small subset of code will take a user object, used
//  in our JS, and convert it into a small, unique, string
//  which is represented by the id, and store it into the
//  session.
passport.serializeUser(function(user, done){
  done(null, user.id);
});

// DESERIALIZATION:
//  Essentially the inverse of above. This will take a user
//  id out of the session and convert it into an actual
//  user object.
passport.deserializeUser(function(id, done){
  User.User.findById(id, function(err, user){
    done(err, user);
  });
});


var localStrategy = new LocalStrategy({ usernameField: 'email', passwordField: 'password',},

  function(email, password, done){
    //finds user with given email. Returns user information
    User.User.findOne({email: email}, function(err, user){
      //if error, return error to processLogin
      if(err) return done(err);
      // If no user was found with that username, continue to the next middleware
      // and tell passport authentication failed.
      if(!user) return done(null, false);
      
      //if there is a user, check if the password matches
      user.comparePassword(password, function(err, isMatch){
        // If there was an error, allow execution to move to the next middleware
        if(err) return done(err);
        // isMatch is true if the passwords match, and false if they don't
        if(isMatch){
          return done(err, user);
        } else {
          return done(null, false);
        }
      });
    });
});

//calling local strategy
passport.use(localStrategy);


// We don't really need to export anything from this file, since just
// including it is enough. However, this helpful middleware allows us
// to block access to routes if the user isn't authenticated by redirecting
// them to the login page. We'll see this used in app.js
module.exports = {
  ensureAuthenticated: function(req, res, next){
    // If the current user is logged in
    if(req.isAuthenticated()){
      return next();
    }

    res.redirect('/auth/login');
  }
};