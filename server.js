var express =  require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config');
var login = require('./login');
var jwt = require('jsonwebtoken');

var app = express();

// Connect to Mongo database
mongoose.Promise = global.Promise;
mongoose.connect(config.db[app.settings.env], function(err) {
  if(err) {
    console.log(err);
    return;
  }
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
 
  // Make database accessable to API resources
  var db = mongoose.connection;
  app.use(function(req, res, next){
    req.db = db;
    next();
  });

  // List of resources
  app.use('/login', login);

  // Start API server
  app.listen(8888, function() {
    console.log('Listening on port 8888');
  });
});
