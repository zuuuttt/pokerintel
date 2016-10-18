const models=require('./models.js');
const Session=models.Session;
const User=models.User;




exports.insertSession=(sessionObj,cb)=> {
    var session=Session(sessionObj);
    
    session.save((err)=>{
        if (err) throw err;
        cb(session);
    });
    
}

exports.getSessions=(cb)=>{
    
    
    Session.find({},(err,sessions)=>{
        if(err) throw err;
        cb(sessions);
    });
    
}




exports.getTotalProfit=(username)=> {
    //takes username and returns total profit
    //for user name across all sessions played
}

exports.getTotalPlay=(username)=> {
    //takes username and returns total time played
    //for username across all sessions played
}







