var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  favRecipes: Object,
  facebookId: String,
  name: String,
  email: String,
<<<<<<< HEAD
  weeks: Array
=======
  week_one: Array,
  week_two: Array 
>>>>>>> Wrote out comments for adding recipes to the calendar for both front-end, server, and DB. Added routes to connect server to DB
});

var User = mongoose.model('User', userSchema);

module.exports = User;
