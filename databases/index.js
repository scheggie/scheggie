var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scheggie');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected to the DB!');
});
