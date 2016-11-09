const mongoose=require('mongoose')
const fs=require('fs');


const Nadia=require("./testdata/Nadia.json");
const Hashim=require("./testdata/Hashim.json")
const app = require('../server.js').app;
const supertest = require('supertest');
const agent = supertest.agent(app);
const User=require("../models/User").User;
const Session=require("../models/Session").Session;



//function getUsers () {
//    User.find({},(err,users)=> {
//        //console.log(users);
//    });
//};
//
//function getSessions () {
//    Session.findAll('zuuuttt',(err,sessions)=> {
//        let jsons=JSON.stringify(sessions);
//        fs.appendFile('./testdata/tt', jsons, (err) => {
//            if (err) {
//                throw err;
//            }
//        
//            console.log('The "data to append" was appended to file!');
//        });
//    
//    
//            //console.log(sessions);
//   
//    });
//    //console.log(test_sessions[0])
//}

let purgeDB=function () {
    

    Session.remove({},(err)=> {
        if(err) {
            return HandleError(err);
        }
    })
    User.remove({},(err)=> {
        if(err) {
            return HandleError(err);
        }
    });
console.log("all records deleted")
}

purgeDB();

describe("POST /user/create test the create user functionality", function() {

    it("tests that we can create a new user which does not exist in the database", function(done) {
        agent.post("/user/create")               // start creating your request
            .type('form')                   // mimic the action of submittin a request with a form
            .send(Hashim.user) // Request construction finished and send the information passed as an argument ex: {name: "pedro", age: 22}
            .expect( function(res){// Check that the responce does or does not have the information necessary to make the test pass
                expect(res.text).toContain("Redirecting to /user/zuuuttt")
                
                
            })
            .end(function(err, res) {          // Allways add these lines when using Supertest with Jasmine
                if(err) {
                    return done.fail(err)
                }
                
                done()
            })
    })
    
    it("tests app fails gracefully when we try to enter a user that already exists", function(done) {
        agent.post("/user/create")
            .type('form')
            .send(Hashim.user)
            .expect(function (res) {
                console.log("errors",res)
                expect(res.text).toContain("Redirecting to /user/AlreadyExists")
                
        })
        .end(function(err, res) {          // Allways add these lines when using Supertest with Jasmine
                if(err) {
                    return done.fail(err)
                }
                
                done()
            });
    })
    
});

describe("GET /user/:username",() => {
    
    it("tests the route for retrieving a user page", function (done) {
        agent.get("/user/"+Hashim.user.username)
                .expect(function(res) {
            //console.log("stuff",res);
        })
        .end(function(err, res) {          // Allways add these lines when using Supertest with Jasmine
                if(err) {
                    return done.fail(err)
                }
                
                done()
            });
        
    }); 
})
//
//    it("tests that we user name should be unique", function(done) {
//        agent.post("/people")
//            .type('form')
//            .send(person)
//            .expect('Content-Type', /json/)
//            .expect(function(res) {
//                if (res.body.code !== 11000) {
//                    throw new Error(res.body.errmsg)
//                }
//            })
//            .end(function(err, res) {
//                if(err) {
//                    return done.fail(err)
//                }
//                console.log("Received following validation error message:\n ",res.body)
//                done()
//            })
//    });
//
//
//    it("Age should be required", function(done) {
//        agent.post("/people")
//            .expect('Content-Type', /json/)
//            .type('form')
//            .send({name: "dd"}) // <--- FILL IN HERE 
//            .expect((res) => { 
//				
//				if(res.body.name!=="ValidationError"||!res.body.errors.age) {
//                    console.log(res.body)
//					throw new Error("Age validation should fail- it's not even though we provided a person object with no age property")
//				}
//			} )
//            .end(function(err, res) {
//                if(err) return done.fail(err)
//                console.log("Received following validation error message:\n ",res.body)
//                done()
//            })
//    })
//
//});
//
//
