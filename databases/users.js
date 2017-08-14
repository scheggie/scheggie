var mongoose = require('mongoose');

mongoose.connect('mongodb:/localhost/users');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected to the DB!');
});

var userSchema = mongoose.Schema({
  favRecipes: Object, 
  facebookId: String,
  name: String,
  email: String,
  weeks: Array 
});

var User = mongoose.model('User', userSchema);

module.exports.db = db;
module.exports.userSchema = userSchema;
module.exports.Users = Users;
