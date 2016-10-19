const session = require('./session.js');
const models = require('./models.js');
const User = models.User


var testSession = {
    username: 'zuuudddttssst',
    venue: 'Viage',
    variant: 'NLHE',
    blinds: [2, 2],
    buyin: '500',
    cashout: 758,
    start: new Date(2016, 10, 18, 19, 00),
    end: new Date(2016, 10, 18, 21, 00)
}





exports.getTotalPlay=(username)=> {
    //takes username and returns total time played
    //for username across all sessions played
}

exports.insertUser = (userObj, cb) => {
    
    userObj.name='test';
    console.log(userObj);
    var user = User(userObj);
    user.save((err) => {
        if (err) throw err;
        console.log("Done");
    });
    cb();

}

exports.findUser = (username, cb) => {
    User.findOne({username: username}, (err, user) => {
        if (err) throw err;

        // object of the user
        console.log(user);
        cb(user);
    });
}


exports.getAllUsers = (cb) => {

    User.find({}, (err, users) => {
        if (err) throw err;
        
        cb(users);
    });

}