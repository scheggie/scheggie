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
    return this.getUserById(user.facebookId)
      .then(user => {
        console.log(user);
        // user.favRecipes = selectedRecipe;
        user.name = 'Bob';
        user.save(err => {
          if (err) {
            throw err;
          }
          console.log('saved user');
        });
      });
  }
};

// Remove recipe from user's favorites
userSchema.statics.removeRecipeFromFavorites = function(user, selectedRecipe) {
  if (user.favRecipes[selectedRecipe.name]) {
    delete user.favRecipes[selectedRecipe.name];
    user.save(err => {
      if (err) {
        throw err;
      }
    });
  }
};


const User = mongoose.model('User', userSchema);

module.exports = User;