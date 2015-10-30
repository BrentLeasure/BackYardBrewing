var passport = require('passport');
var User = require('../models/user');

var performLogin = function(req, res, next, user){
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

  processLogin: function(req, res, next){
    var authFunction = passport.authenticate('local', function(err, user, info){
      if(err){
        res.send({theError: err});
      } else if(!user) {
		    res.send({theError: 'Invalid Email or wrong password'});
      }else{
        performLogin(req, res, next, user);
      }
    });

    authFunction(req, res, next);
  },

  processSignup: function(req, res, next){
    var user = new User.User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });

    // Now that the user is created, we'll attempt to save them to the
    // database.
    user.save(function(err, user){
      
      if(err) {
        //if 11000, it means there is a user that already exists
        if(err.code === 11000){
		      return res.send({error : 'This user already exists.'})
        }else{
		      return res.send({error : 'An error occured, please try again'})
		    }
        
      }
      performLogin(req, res, next, user);
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