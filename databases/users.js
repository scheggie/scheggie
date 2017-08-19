const Recipe = require('./recipes.js');

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  favRecipes: Object, 
  facebookId: String,
  name: String,
  email: String,
  week_one: Array,
  week_two: Array 
});

// Get single user by facebookId
userSchema.statics.getUserById = function(facebookId) {
  return this.findOne({'facebookId': facebookId});
};

// Save recipe to user's favorites
userSchema.statics.saveRecipeToFavorites = function(user, selectedRecipe) {
  if (!user.favRecipes[selectedRecipe.name]) {
    var favorites = user.favRecipes;
    favorites[selectedRecipe.name] = selectedRecipe;
    User.update({'facebookId': user.facebookId}, {$set: {'favRecipes': favorites}}, (err, response) => {
      if (err) {
        throw err;
      }
      console.log(response);
    });
  }
};

// Remove recipe from user's favorites
userSchema.statics.removeRecipeFromFavorites = function(user, selectedRecipe) {
  if (user.favRecipes[selectedRecipe.name]) {
    delete user.favRecipes[selectedRecipe.name];
    var favorites = user.favRecipes;
    User.update({'facebookId': user.facebookId}, {$set: {'favRecipes': favorites}}, (err, response) => {
      if (err) {
        throw err;
      }
      console.log(response);
    });
  }
};


const User = mongoose.model('User', userSchema);

module.exports = User;