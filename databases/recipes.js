const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  name: {type: String},
  fullDataSorter: Boolean,
  rating: Number,
  abridgedData: {},
  fullData: {}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

recipeSchema.methods.getFullRecipeByName = name => {
  Recipe.find({'name': name}).
    resolve(recipe);
};

module.exports = Recipe;

