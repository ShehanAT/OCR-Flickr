var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: "shehan123",
    userProperty: 'payload',
    algorithms: ['HS256']
});
const mongoose = require('mongoose');
const User = mongoose.model('User');

const ctrlProfile = require('../controllers/userProfile');
const ctrlAuthRegister = require('../controllers/authentication').register;
const ctrlAuthLogin = require('../controllers/authentication').login;
const ctrlGetUsername = require('../controllers/authentication').getUserByUsername;
const ctrlImages = 
require('../controllers/imageController').callFlickr;
const ctrlOCRData = require('../controllers/imageController').callOCRData;
const ctrlGetAllUsers = require('../controllers/authentication').getAllUsers;
const ctrlGetUserByUsername = require('../controllers/authentication').getUserByUsername;
//profile

router.get('/profile', auth, ctrlProfile.profileRead);//auth is the middleware used for authentication
//router.get('/getUsers/:uName', ctrlGetUserByUsername);
router.get('/getUsers/:uName', function(req, res, next){
         User.find({}, function(err, users){
            let userData = [];
             users.forEach((user) => {
                 userData.push({
                     username: user.username
                 });
             });
             let result = userData.filter(user => {
                 return user.username === req.params.uName
             });
             console.log(result);
             return res.json(result);
         });

})
router.post('/register', ctrlAuthRegister);



//authentication
//for sending post request to server
router.post('/login', ctrlAuthLogin);
router.post('/sendImageTag', ctrlImages);
router.post('/sendOCRData', ctrlOCRData);

module.exports = router;
