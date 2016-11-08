const express = require('express');
const router = express.Router();
const User = require("../models/User").User;
const Session=require("../models/Session").Session;


router.get('/', (req, res) => {
    User.findAllUsers(function(err, result) {
        console.log(result);
        res.render('index.ejs', {
            usernames: result
        })
    })
})

router.get('/about', (req, res) => {
    res.render('about.ejs')
})

router.get('/user/new', (req, res) => {
    res.render('createuser.ejs')
})

router.post('/user/create', (req, res) => {
        //check uniqueness
        var username = req.body.username
 
        var userObj = {
            "username": username,
            "name": req.body.name
        }
        
        var user=new User(userObj);
        user.save((err)=> {
            res.redirect('/user/:username')
        });
        
});


router.get('/user/:username', (req, res) => {
    User.findbyUsername(req.params.username,(err,user)=> {
        console.log(user);
        res.render('userprofile.ejs',user);
    });
});


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
        blinds: [req.body.smblind, req.body.bigblind],
        buyin: req.body.buyin,
        cashout: req.body.cashout,
        start: new Date(req.body.start),
        end: new Date(req.body.end)
    }
    var session = new Session(sessionObj);
    
    session.save((err)=> {
        
        if(err) {
            console.log(err.message);
        }
        res.redirect('/')

        
    });
})

router.get('/user/:username/session/list',(req,res) => {
    Session.findAll(req.params.username,(err,sessions)=> {
        res.render('userpokersessions.ejs', {
                sessions: sessions,
                username: req.params.username
        });
        
    });
});


module.exports = router