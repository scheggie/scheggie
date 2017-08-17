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
userSchema.statics.getUserById = function(id) {
  return this.find({'facebookId': id});
};

// Save recipe to user's favorites
userSchema.statics.saveRecipeToFavorites = function(user, selectedRecipe) {
  if (!user.favorites[selectedRecipe.name]) {
    Recipe.getFullRecipeByName(selectedRecipe.name).
      then(recipe => {
        user.favorites[selectedRecipe.name] = JSON.parse(recipe);
        user.save(err => {
          if (err) {
            throw err;
          }
        });
      });
  }
};

// Remove recipe from user's favorites
userSchema.statics.removeRecipeFromFavorites = function(user, selectedRecipe) {
  if (user.favorites[selectedRecipe.name]) {
    delete user.favorites[selectedRecipe.name];
    user.save(err => {
      if (err) {
        throw err;
      }
    });
  }
};


const User = mongoose.model('User', userSchema);

module.exports = User;