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



exports.getSessions=(search,cb)=>{
    
    
    Session.find(search || {},(err,sessions)=>{
        if(err) throw err;
        cb(sessions);
    });
    
}

exports.getTotalProfit=(username,cb)=> {
    
    Session.find(user,(sessions)=>{
        var totalprofit=sessions.reduce((prev,curr)=> {
            return prev+curr;
        });
        cb(totalprofit);
    });
}











