const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

const controller = require('./controllers/controller')
app.use(controller)

app.listen(3000, function() {
	console.log('chilling on 3000');
})