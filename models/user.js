const Session = require('./session.js');
const models = require('./models.js');
const User = models.User


exports.insertUser = (userObj, cb) => {

    var user = new User(userObj);
    user.save((err) => {
        if (err) throw err;
        console.log("inserted");
        
    });
    cb();

}

exports.findUser = (username, cb) => {
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;

        // object of the user
        if(user) {
            cb(null,user);
        }
        else {
            console.log("Could not find any user with username: "+username);
        }
 
    });
}


exports.getAllUsers = (cb) => {

    User.find({}, (err, users) => {
        if (err) throw err;
        
        cb(null,users);
    });

}

exports.getTotalProfit=(username,cb)=> {
    
    Session.getSessions(username,(err,sessions)=>{
        console.log(sessions);
        var profit=sessions.map((curr)=> {
            return curr.profit;
        });
        
        var totalprofit=profit.reduce((prev,curr)=> {
            
            return prev+curr;
        },0);
        cb(null,totalprofit);
        console.log(totalprofit)
    });
}

exports.getTotalDuration=(username,cb)=> {
    //takes username and returns total time played
    //for username across all sessions played
    Session.getSessions(username,(err,sessions)=>{
        
        var duration=sessions.map((curr)=> {
            
            return Date.parse(curr.duration);
        })
        
        var totalduration=duration.reduce((prev,curr)=>{
            return prev+curr;
        },0)
        totalinhours=Math.ceil(totalduration/360000);
        console.log(totalinhours);
        cb(null,totalduration);
    })
}