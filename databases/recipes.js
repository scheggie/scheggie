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

// Get 20 recipes with search query in name
recipeSchema.statics.getFullRecipesForSearchResults = function(query) {
  return this.find({'name': {$regex : '.*${req.body.query}.*'}}).
    limit(20);
};


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

