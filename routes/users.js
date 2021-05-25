const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { User } = require('../api/models/user');
var mongojs = require('mongojs');
var db = require('../db.js');


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
	if(!ObjectId.isValid(req.params.id)){
		return res.status(400).send('No user record with given id:' + req.params.id);
	}
	var user = {
		username: req.body.username,
		fullname: req.body.fullName,
		age: req.body.age,
		emailAddress: req.body.emailAddress,
		// password: req.body.password
	};
	// console.log(user)
	// console.log(req.params.id)
	console.log(User.find())
	User.findById(req.params.id)
	.update(req.body)
	.exec((err, record) => {
		if(err){
			console.log('err!')
			err.status = 400;
			console.log('Error in User Update : ' + JSON.stringify(err, undefined, 2));
		}
		User.findById(req.params.id)
		.exec((err, record) => {
			if(err){
				console.log('second err!')
				console.log('Error in Finding User Update : ' + JSON.stringify(err, undefined, 2));
			}
			res.send(record);
		})

	res.send(record);//does not return updated body
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