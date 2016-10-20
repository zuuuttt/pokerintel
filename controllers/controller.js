const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Session = require("../models/session");

const Mongo = require('mongodb');
const ObjectID = Mongo.ObjectID;

router.get('/', (req, res) => {
    User.getAllUsers(function(err, result) {
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
            // User.getAllUsers(function(result) {
            //     for (var i = 0; i < result.length; i++) {
            //         if (username === result[i].username) {
            //             console.log('This username already exists')
            //             res.render('/user/create')
            //         }
            //     }
        var userObj = {
            "username": username,
            "name": req.body.name
        }
        User.insertUser(userObj, function() {
            res.redirect('/user/' + username)
        })
    })
    // })

router.get('/user/:username', (req, res) => {
    User.findUser(req.params.username, (err, result) => {
        User.getTotalProfit(req.params.username, (err, profit) => {
            User.getTotalDuration(req.params.username, (err, duration) => {
                var totalprofit = profit
                var totalduration = duration
                var rate = totalprofit / totalduration
                console.log("profit",totalprofit);
                console.log("duration: ",totalduration);
                console.log("rate: ",rate);
                res.render('userprofile.ejs', {
                    username: req.params._username,
                    totalprofit: totalprofit,
                    totalduration: totalduration,
                    hourlyrate: rate
                })
            })
        })


    })

    // User.findUser(req.params.username, function(result) {
    //     res.render('userprofile.ejs', {
    //         user: result
    //     })
    // })

})

router.get('/user/:username/session/new', (req, res) => {
    res.render('createpokersession', {
        username: req.params.username
    })
})

router.post('/user/:username/session/create', (req, res) => {

    var sessionObj = {
        username: req.params.username,
        venue: req.body.venue,
        variant: req.body.variant,
        blinds: [1, 2],
        buyin: req.body.buyin,
        cashout: req.body.cashout,
        start: new Date(req.body.start),
        end: new Date(req.body.end)
    }
    Session.insertSession(sessionObj, () => {
        res.redirect('/user/' + req.params.username)
    })
})

router.get('/user/:username/session/list', (req, res) => {
    Session.getSessions(req.params.username, function(err, result) {
        console.log(result)
        console.log(result.username)
        res.render('userpokersessions.ejs', {
            sessions: result
        })
    })
});
module.exports = router