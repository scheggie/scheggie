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

const User = mongoose.model('User', userSchema);

// Get single user by facebookId
userSchema.methods.getUserById = (id, cb) => {
  User.find({'facebookId': id}).
    resolve(user);
};

// Save recipe to user's favorites
userSchema.methods.saveRecipeToFavorites = (user, selectedRecipe) => {
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


module.exports = User;