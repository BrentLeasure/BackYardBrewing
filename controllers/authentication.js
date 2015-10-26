var passport = require('passport');
var User = require('../models/user');

var performLogin = function(req, res, next, user){
  req.login(user, function(err){

    if(err) return next(err);

    return res.redirect('/');
  });
};

//Authentication controller
var authenticationController = {
  login: function(req, res){
   res.sendFile('/html/login.html', {root : './public'})
  },
  
  processLogin: function(req, res, next){
    var authFunction = passport.authenticate('local', function(err, user, info){
      if(err) return next(err);
     
      if(!user) {
		    return res.send({error: 'Invalid Email'});
      }

      performLogin(req, res, next, user);
    });

    authFunction(req, res, next);
  },

  processSignup: function(req, res, next){
    var user = new User({
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

    res.redirect('/auth/login');
  }
};

// Export our controller methods
module.exports = authenticationController;