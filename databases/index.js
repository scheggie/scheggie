var mongoose = require('mongoose');
var config = require('../config.js');

mongoose.connect(process.env.MONGODB_URI || config.DB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected to the DB!');
});
