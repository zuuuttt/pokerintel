
var mongoose = require('mongoose');
const server = require('../server')
const conn='mongodb://Nicolas:foobar@ds033996.mlab.com:33996/nico-mongodb'

console.log('stuffff');

mongoose.connect(conn,function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');     
    }
});

const Session = require("../models/Session").Session;
const User = require("../models/User").User;

// 1: Create new user
describe("User creation", function() {
	console.log('test shit');

    // Check if created user can be found in db
    it("finds user that was just created in database", function() {
        var testUser = {
            username: 'Noforv'
        }
        console.log('testuser made');
        var user = new User(testUser)
        user.save((err, cb) => {
            if (err) throw err
        })
        console.log('user saved');
        User.findByUsername('Noforv', (err, result) => {
            if (err) throw err
            expect(result).toEqual(testUser)
        })
    });
});
//Check if user can be submitted without username

//Check uniqueness of username


//Check Schema for unit types





// 4: Check if finding all users -returns an array
//								 -returns all users



// 5: Check if find by username returns an object