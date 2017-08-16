const RecipeModel = require('./recipes.js');

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
const getUserById = (id, cb) => {
  User.find({'facebookId': id}).
    exec(user => {
      cb(user);
    });
};

// Save recipe to user's favorites
const saveRecipeToFavorites = (user, recipe) => {
  if (!user.favorites[recipe.name]) {
    RecipeModel.getFullRecipeByName(recipe.name, recipe => {
      user.favorites[recipe.name] = JSON.parse(recipe);
      user.save(err => {
          if (err) {
            throw err;
          }
      });
    });
  }
};


module.exports = {
  User,
  getUserById,

};


