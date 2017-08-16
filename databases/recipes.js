const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  name: {type: String},
  fullDataSorter: Boolean,
  rating: Number,
  abridgedData: {},
  fullData: {}
});

recipeSchema.statics.getFullRecipeByName = function(name) {
  return this.find({'name': name});
};

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

