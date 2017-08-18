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
  if (!user.favRecipes[selectedRecipe._id]) {
    Recipe.getFullRecipeByName(selectedRecipe._id).
      then(recipe => {
        user.favRecipes[selectedRecipe._id] = JSON.parse(recipe);
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
  if (user.favRecipes[selectedRecipe._id]) {
    delete user.favRecipes[selectedRecipe._id];
    user.save(err => {
      if (err) {
        throw err;
      }
    });
  }
};


const User = mongoose.model('User', userSchema);

module.exports = User;