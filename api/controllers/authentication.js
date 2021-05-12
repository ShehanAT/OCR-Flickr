const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var sendJSONresponse = function(res, status, content){//sending json response
    res.status(status);
    res.json(content);
}
module.exports.getAllUsers = function(req, res, next){
    
    User.find({})
    .exec((err, users) =>{
        if(err) return next(next);
        let userData = [];
        users.forEach((user) => {
            userData.push({
                username: user.username
            });
        });
   
})
}
module.exports.checkUsernameNotTaken = function(req, res, next){
//    const username = req.;
//    User.findOne({username: username})
//        .then(user => {
//            if(!user){
//                return res.json({
//                    usernameNotTaken: true
//                });
//            }else{
//                return res.json({
//                    usernameNotTaken: false
//                })
//            }
//        })
//        .catch(error => {
//            res.json({
//                usernameNotTaken: true
//            })
//        });
}

module.exports.getUserByUsername = 
    function(request, res, next){
     User.find({})
    .exec((err, users) =>{
         let userData = [];
         users.forEach((user) =>{
             userData.push({
                 username: user.username
             });
         });
         console.log(userData);
        console.log(request.params.uName);
         userData.forEach((user) => {
             if(user.username === request.params.uName){
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ uniqueUsername: true}));
             }
         })
       
        //user found
       
    }).then((data) =>{
         console.log(data);
         res.status(200);
         return null;
     })
}
    


module.exports.register = function(req, res, next){
    var user = new User();
    user.username = req.body.username;
         
    user.emailAddress = req.body.emailAddress;
   
    user.fullName = req.body.fullName;
    
    user.age = req.body.age;
  
    user.setPassword(req.body.password);//causing error 
  
  
     user.save((err)=>{
        if(err){
            console.log(err);
            return next(err);
        }
    var token = user.generateJwt();//generating json web token for the user object, causing error
    res.status(200);
    res.json({
        "token": token
    });
    }); 
  
};

module.exports.login = function(req, res, next){
    passport.authenticate('local', function(err, user, info){
        var token; 
        
        //If Passport throws/catches an error
        if(err){
            res.status(404).json(err);
            return;
        }
        //if a user is found
        if(user){
            token = user.generateJwt();
            res.status(200);
            res.json({//returning the json web token in json format
                "token": token
            });
        }else{
            //if user is not found
            res.status(401).json(info);
        }
    })(req, res);//what is this syntax?
};