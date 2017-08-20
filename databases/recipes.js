const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  name: {type: String},
  fullDataSorter: Boolean,
  rating: Number,
  abridgedData: {},
  fullData: {}
});

// Get full recipe from db by recipeName
recipeSchema.statics.getFullRecipeByName = function(name) {
  return this.find({'name': name});
};

// Get *limit* recipes with search query in name
recipeSchema.statics.getFullRecipesForSearchResults = function(query, limit=120) {
  return this.find({
    'name': {'$regex': new RegExp(query, "i")}
  }).limit(limit);
};

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
