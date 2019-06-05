// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const bluebird = require('bluebird');
const path = require('path');

// Get the API route ...
const api = require('./route/api.routes');

// const db = require('./db');
// require('./route/menu.routes.js')(app);  //Add route file here
// initialize our express app
const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/api', api);

// Configuring the database
const mongoose = require('mongoose');
// const config = require('./config');
require('./route/menu.routes.js');  //Add route file here

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

// mongoose.Promise = global.Promise;
mongoose.Promise = bluebird;

// Connecting to the database
mongoose.connect(connectionString , {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ZeptoBook Product app"});
});



const puerto = config.app.port;

app.listen(config.app.port, () => {
    console.log('Server is up and running on port : ' + puerto);
});