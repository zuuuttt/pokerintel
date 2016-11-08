const mongoose = require('mongoose');
const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();
const conn='mongodb://Nicolas:foobar@ds033996.mlab.com:33996/nico-mongodb'

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json())

const controller = require('./controllers/controller')
app.use(controller)

/*code below connects to database via mongoose driver and starts listening
on port 3000... placed here to ensure connection to database is available
before we start listening for client requests*/

mongoose.connect(conn,function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
        
        app.listen(3000, function() {            
	        console.log('chilling on 3000');
	    });        
    }
});



