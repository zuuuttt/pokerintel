const express = require('express');
const router = express.Router();
const User = require("../models/user")
const Session = require("../models/session")

const Mongo = require('mongodb');
const ObjectID = Mongo.ObjectID;

router.get('/', (req, res) => {
    User.getAllUsers(function(result) {
        res.render('index.ejs', {
            usernames: result
        })
    })
})

router.get('/user/new', (req, res) => {
    res.render('createuser.ejs')
})

router.post('/user/create', (req, res) => {
    //check uniqueness
    var username = req.body.username
    User.getAllUsers(function(result) {
        for (var i = 0; i < result.length; i++) {
            if (username === reselt[i].username) {
                console.log('This username already exists')
                res.render('/user/create')
            }
        }
        var userObj = {
            "username": username,
            "name": req.body.name
        }
        User.insertUser(userObj, function() {
            res.redirect('/users/' + username)
        })
    })
})

router.get('/user/:username', (req, res) => {

	User.findUser(req.params.username, (err, result) => {
		res.render('userprofile.ejs', {user:result})
	})

    User.findUser(req.params.username, function(result) {
        res.render('userprofile.ejs', {
            user: result
        })
    })

})

router.get('/user/session/new', (req, res) => {
    res.render('createpokersession')
})

router.post('/user/:username/session/create', (req, res) => {

	var sessionObj ={
		username:req.params.username,
		venue:req.body.venue,
		variant:req.body.variant,
		blinds: req.body.blinds,
		buyin: req.body.buyin,
		cashout: req.body.cashout,
		start: req.body.start,
		end: req.body.end
	}
	Session.insertSession(sessionObj, ()=>{
		res.redirect('/user/'+req.params.username)
	})
})

router.get('/user/:username/session/list', (req, res) => {
	Session.getSessions(reg.params.username, (result)=>{
		res.render('userpokersessions.ejs', {sessions: result})
	})

    var sessionObj = {
        username: req.params.username,
        venue: req.body.venue,
        variant: req.body.variant,
        blinds: req.body.blinds,
        buyin: req.body.buyin,
        cashout: req.body.cashout,
        start: req.body.start,
        end: req.body.end
    }
    Session.insertSession(sessionObj, function() {
        res.redirect('/user/' + req.params.username)
    })
})

router.get('/user/:username/session/list', (req, res) => {
    Session.getSessions(reg.params.username, function(result) {
        res.render('userpokersessions.ejs', {
            sessions: result
        })
    })
});
module.exports = router

