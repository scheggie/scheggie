var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  favRecipes: Object,
  facebookId: String,
  name: String,
  email: String,
  week_one: Array,
  week_two: Array 
});

var User = mongoose.model('User', userSchema);

module.exports = User;
