var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

var User = new Schema({
  name: String, 
  password: String, 
  admin: Boolean 
});

var Users = mongoose.model('User', User);

module.exports = router;
