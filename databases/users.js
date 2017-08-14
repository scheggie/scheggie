var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  favRecipes: Object,
  facebookId: String,
  name: String,
  email: String,
  weeks: Array
});

var User = mongoose.model('User', userSchema);

module.exports = User;
