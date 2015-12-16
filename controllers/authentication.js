var passport = require('passport');
var userModel = require('../models/user');

var performLogin = function(req, res, user){
  req.login(user, function(err){
    if(err){
      res.send(err);
    }else{
      user.password = "none of your damn business";
      res.send(user);
    }
  });
};

//Authentication controller
var authenticationController = {

  processLogin: function(req, res){
    var authFunction = passport.authenticate('local', function(err, user, info){
      if(err){
        res.send(err);
      } else if(!user) {
        var err = {err: "Your password or email is incorrect"};
        res.send(err)
      }else{
        performLogin(req, res, user);
      }
    });

    authFunction(req, res);
  },

  processSignup: function(req, res){
    var user = new userModel.User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });
     // user.findOne({ username: username }, function (err, user) {
    // Now that the user is created, we'll attempt to save them to the
    // database.
    user.save(function(err, user){
      
      if(err) {
        //if 11000, it means there is a user that already exists
        if(err.code === 11000){
          var err = "Your username/email is already in use";
		      res.send(err);
        }else{
          var err = "An error has occured. Please try again";
		      res.send(err);
		    }
        
      }else{
        performLogin(req, res, user);
      }
    });
  },

  // logs the user out
  logout: function(req, res){
    req.logout();
    res.redirect('/');
  }
};

// Export our controller methods
module.exports = authenticationController;