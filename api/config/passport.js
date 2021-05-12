const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'username'
},
   function(username, password, done){
    User.findOne({username: username}, function(err, user){
        if(err) { return done(err);}
        //return if user not found in database
        if(!user){
            return done(null, false, {
                message: 'User not found'
            });
            
        }
        //return error message if the password is wrong
        if(!user.validPassword(password)){
            return done(null, false, {
                message: 'Password is wrong'
            });
        }
        //if credentials are correct, return the user object 
        return done(null, user);
    })
}                           
));2