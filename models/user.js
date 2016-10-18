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

/*session.insertSession(testSession,(session)=>{
    console.log(session);
})*/

/*session.getSessions((sessions)=> {
    console.log(sessions);
})*/

exports.insertUser = (userObj, cb) => {

    var user = User(userObj);
    User.save((err) => {
        if (err) throw err;
        console.log("Done");
    });
    cb();

}

exports.findUser = (username, cb) => {
    User.find({
        username: username
    }, (err, user) => {
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