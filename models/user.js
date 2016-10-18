const session=require('./session.js');
const models=require('./models.js');

var testSession={    
    username: 'zuuudddttssst',
    venue: 'Viage',
    variant: 'NLHE',
    blinds: [2,2],
    buyin: '500',
    cashout: 758,
    start: new Date(2016,10,18,19,00),
    end: new Date(2016,10,18,21,00)
}

/*session.insertSession(testSession,(session)=>{
    console.log(session);
})*/

session.getSessions((sessions)=> {
    console.log(sessions);
})

exports.insertUser=(userObj)=> {
    
    var user=User(userObj);
    user.save((err)=> {
        if(err) throw err;
        console.log("Done");
    });
    //Takes user object to be inserted into database
    //returns inserted object if sucessful insert
    //else returns error if userObj does not meet
    //schema criteria
}
    