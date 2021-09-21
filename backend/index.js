/*
Project : Vote
FileName : index.js
Author : Vlady
File Created : 10/03/2022
CopyRights : Vlady
*/

const express = require('express')
const app = express()
const https = require("https");
var config = require("./helper/config")
var bodyParser = require('body-parser');

var vote = require("./module/vote/route/vote")

var mongoose = require('mongoose');
var cors = require('cors')
const swaggerUi = require('swagger-ui-express');
global.__basedir = __dirname;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/media'));
app.use(cors())

/*
* Below lines used to connect databse moongoose ORM
*/
mongoose.connect('mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
var db = mongoose.connection;
// Added check for DB connection
db.on('connected', () => console.log('Connected'));
db.on('error', () => console.log('Connection failed'));

/*
* Below lines used to define route for the api services
*/
app.get('/', (req, res) => res.send('Welcome to Vote API'))
app.use('/vote', vote)

/*
* Below lines used to handle invalid api calls
*/
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

/*
* Below lines used to run api service 
*/
//https.createServer(options, app).listen(config.app.port, () => console.log(`Cryptotrades app listening on port ${config.app.port}!`));
app.listen(config.app.port, () => console.log(`Vote app listening on port ${config.app.port}!`))