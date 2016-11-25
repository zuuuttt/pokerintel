//const models=require('./models.js');
//const Session=models.Session;
//const User=models.User;

//returns queries objects which contains query methods that can be used by controller

//exports.queries= {
//    getSessions: function(username) {
//    
//        let query=Session.find({username: username});
//        let promise=query.exec((err,sessions)=> {
//            if(err) {
//                return handleError(err);
//            }
//            //return sessions;    
//        });
//        return promise;
//    
//    }
//       
//    
//}



//
//exports.insertSession=(sessionObj,cb)=> {
//    var session=new Session(sessionObj);
//   
//    session.save(function (err) {
//    if(err) throw err;
//
//     cb(session);
//    });
// 
//}

//exports.getSessions=(username,cb)=>{
//
//    Session.find({username: username},(err,sessions)=>{
//        if(err) throw err;
//        cb(null,sessions);
//    });
//    
//}















