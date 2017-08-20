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

userSchema.set('minimize', false);
// Get single user by facebookId
userSchema.statics.getUserById = function(facebookId) {
  return this.findOne({'facebookId': facebookId});
};

// Save recipe to user's favorites
userSchema.methods.saveRecipeToFavorites = function(selectedRecipe) {
  if (!this.favRecipes[selectedRecipe._id]) {
    this.favRecipes[selectedRecipe._id] = selectedRecipe;
    this.markModified('favRecipes');
    return this.save();
  } else {
    return Promise.resolve(this);
  }
};

// Remove recipe from user's favorites
userSchema.methods.removeRecipeFromFavorites = function(selectedRecipe) {
  if (this.favRecipes[selectedRecipe._id]) {
    delete this.favRecipes[selectedRecipe._id];
    this.markModified('favRecipes');
    return this.save();
  } else {
    return Promise.resolve(this);
  }
};

// Add recipe to calendar
userSchema.methods.addToCalendar = function(recipe, weekNumber, dayId, meal) {
  this[weekNumber][dayId][meal] = recipe;
  this.markModified(weekNumber);
  return this.save();
};

// Remove recipe from calendar
userSchema.methods.removeFromCalendar = function(recipe, weekNumber, dayId, meal) {
  let weekArray = this[weekNumber];
  delete this[weekNumber][dayId][meal];
  this.markModified(weekNumber);
  return this.save();
};


const User = mongoose.model('User', userSchema);

module.exports = User;
