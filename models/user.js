var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var userSchema = mongoose.Schema({
  username: {
	  type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  friendsList: {
    type: Array, "default" : []
  },
  favoriteRecipes: {
    type: Array, "default" : []
  }
});

/**
 * This allows us to hook into the pre-save DB flow. Our
 * callback will be called whenever a new user is about to
 * be saved to the database so that we can encrypt the password.
 */

userSchema.pre('save', function(next){
  if(!this.isModified('password')) return next();
  var user = this;
  // Generate an encryption "salt." This is a special way of increasing the
  // encryption power by wrapping the given string in a secret string. Something
  // like "secretpasswordsecret" and then encrypting that result.
  bcrypt.genSalt(10, function(err, salt){
    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);
    // If we are successful, use the salt to run the encryption on the given password
    bcrypt.hash(user.password, salt, function(err, hash){
      // If there was an error, allow execution to move to the next middleware
      if(err) return next(err);
      // If the encryption succeeded, then replace the un-encrypted password
      // in the given document with the newly encrypted one.
      user.password = hash;
      // Allow execution to move to the next middleware
      return next();
    });
  });
});


/**
 * Method on the user schema that allows us to hook into the
 * bcrypt system to compare an encrypted password to a given
 * password. This process doesn't involve unencrypting the stored
 * password, but rather encrypts the given one in the same way and
 * compares those values
 */
// Constructor.prototype.comparePassword
userSchema.methods.comparePassword = function(userPassword, next){
  // Use bcrypt to compare the unencrypted value to the encrypted one in the DB
  bcrypt.compare(userPassword, this.password, function(err, isMatch){
    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);

    // If there is no error, move to the next middleware and inform
    // it of the match status (true or false)
    return next(null, isMatch);
  });
};
  

module.exports = {
  User : mongoose.model("user", userSchema),
}