const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  name: {type: String},
  fullDataSorter: Boolean,
  rating: Number,
  abridgedData: {},
  fullData: {}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const getFullRecipeByName = (name, cb) => {
  Recipe.find({'name': name}).
  exec(cb);
};

module.exports = {
  Recipe,
  getFullRecipeByName
};

