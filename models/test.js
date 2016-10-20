var Session=require("./session.js");
var User=require("./user.js");
var start=new Date('2013-06-22T23:57:00.000Z')
var end=new Date('2013-06-22T23:57:00.000Z')
var session = {
    username: 'GusHansen',
    venue: 'Wynn',
    variant: 'NLHE',
    blinds: [100, 200],
    buyin: '50000',
    cashout: 75800,
    start: new Date(2016, 10, 18, 19, 00),
    end: new Date(2016, 10, 18, 21, 00)
}


var user={ 
            username: "GusHansen",
            name: "Gus Hansen"
         
        };
//
//User.insertUser(user,()=>{
//    console.log(user);
//})

User.findUser("GusHansen",(err,user)=>{
    if(err) {
        console.log("Irrelevant right now")
    }
    console.log(user);
});

User.getAllUsers((users)=>{
    console.log(users);
})

//Session.insertSession(session,(session)=> {
//    console.log("Inserted Session");
//})


Session.getSessions("zuuuttt",(sessions)=>{
    console.log(sessions)
})

User.getTotalProfit("zuuuttt",(totalprofit)=>{
    console.log(totalprofit);
});

User.getTotalDuration("zuuuttt",(totalplay)=>{
    console.log(totalplay)
})

