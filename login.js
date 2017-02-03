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

router.post('/login', function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });
        res.json({
          success: true,
          message: 'Created token',
          token: token
        });
      }   
    }
  });
});

module.exports = router;
