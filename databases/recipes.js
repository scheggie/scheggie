var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: {type: String},
  fullDataSorter: Boolean,
  rating: Number,
  abridgedData: {},
  fullData: {}
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
