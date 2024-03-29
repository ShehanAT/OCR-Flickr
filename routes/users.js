const express = require('express');
var router = express.Router();
// var ObjectId = require('mongoose').Types.ObjectId;

const dbURI = 'mongodb://localhost/CrudDB'
const mongoose = require('mongoose');
mongoose.connect(dbURI)
require('../api/models/user');
const User = mongoose.model('User');
var mongojs = require('mongojs');
var db = require('../db.js');
const crypto = require('crypto');
router.get('/', (req, res) => {
	console.log("passing user index route");
	User.find((err, record) =>{
		if(!err) { 
			res.send(record); 
		}
		else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
	});
});

router.get('/:id', (req, res) => {
	if(!ObjectId.isValid(req.params.id)){
		return res.status(400).send('No record with the given id:' + req.params.id);
	}
	User.findById(req.params.id, (err, record) => {
		if(!err){ res.send(record); }
		else{ console.log('Error in getting specified user with id:' + JSON.stringify(err, undefined, 2)); }
	});
});

router.post('/', (req, res) => {
	var user = new User({
		username: req.body.username,
		fullName : req.body.fullName,
		age: req.body.age,
		emailAddress: req.body.emailAddress,
		password: req.body.password
	})
	user.save((err, message) => {
		if(!err) { res.send(message); }
		else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
	});
})

router.put('/:id', (req, res) => {
	User.findById(req.body._id, function(err, user){
		if(err){
			console.log('Error in user update' + JSON.stringify(err, undefined, 2));
			return res.status(400).send('No user found to update!');
		}
		user.username = req.body.username;
		user.emailAddress = req.body.emailAddress;
		user.fullName = req.body.fullName;
		user.age = req.body.age;
		user.save()
		return res.status(200).send(user.toJSON())
	});	
});

router.put('/:id/changePassword', (req, res) => {
	console.log(req.body);
	newPassword = req.body.newPassword;
	currentPassword = req.body.currentPassword;
	User.findById(req.body.user._id, function(err, user){
		if(err){
			console.log('Error in user update' + JSON.stringify(err, undefined, 2));
			return res.status(500).send('No user found to update!');
		}
		if(currentPassword){
			var currentPasswordHash = crypto.pbkdf2Sync(currentPassword, user.salt, 1000, 64, 'sha512').toString('hex');
			console.log("currentPassword hash: " + currentPasswordHash);
			console.log("db hash: " + user.hash)
			var isMatch = currentPasswordHash == user.hash ? true : false;
			if(isMatch){
				console.log('current password is a match!');
				if(newPassword){
					user.setPassword(req.body.newPassword);
					user.save()
					return res.status(200).send(user.toJSON())
				}
				else{
					return res.status(500).json({status: 501, message: 'New password not provided!'});
				}
			}else{
				return res.status(500).json({status: 500, message:'Existing password is incorrect!'});
			}
		}	
	});	
});

router.delete('/:id', (req, res) => {
	if(!ObjectId.isValid(req.params.id)){
		return res.status(400).send('No record with given id : ${req.params.id}');
	}
	User.findByIdAndRemove(req.params.id, (err, record) => {
		if(!err) { res.send(record); }
		else{ console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
	});
});


module.exports = router;