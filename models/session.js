const models=require('./models.js');
const Session=models.Session;
const User=models.User;

exports.insertSession=(sessionObj,cb)=> {
    var session=new Session(sessionObj);
   
    session.save(function (err) {
    if(err) throw err;

     cb(session);
    });
 
}

exports.getSessions=(username,cb)=>{

    Session.find({username: username},(err,sessions)=>{
        if(err) throw err;
        cb(sessions);
    });
    
}















