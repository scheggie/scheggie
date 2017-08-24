const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  name: {type: String, text: true},
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
recipeSchema.statics.getRecipesBySearchFilter = function(query, filter, limit=90) {
	query = query.split(' ').map(term => '\"' +  term + '\"').join('');
	 if(filter.cuisine === ''){
    return this.find({
			'$text': {$search: query},
			'fullData.nutritionEstimates': {'$elemMatch': {value: {'$lt': parseInt(filter.calories)}}},
			'fullData.totalTimeInSeconds': {'$lt': parseInt(filter.totalTimeInSeconds)}
		}).limit(limit);	
	} else {
		return this.find({
			'$text': {$search: query},
			'fullData.nutritionEstimates': {'$elemMatch': {value: {'$lt': parseInt(filter.calories)}}},
			'fullData.totalTimeInSeconds': {'$lt': parseInt(filter.totalTimeInSeconds)},
			'fullData.attributes.cuisine': {'$all': [filter.cuisine]}
		}).limit(limit);	
	}
};

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;