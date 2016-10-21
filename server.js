const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json())

const controller = require('./controllers/controller')
app.use(controller)

app.listen(3000, function() {
	console.log('chilling on 3000');
	console.log('Hashim is a sexy beast');
})