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
  console.log('filter calories are ', typeof parseInt(filter.calories));
	 if(filter.cuisine === ''){
     if(filter.calories === '') { // cuisine empty & calories empty
       return this.find({
   			'$text': {$search: query},
   			'fullData.totalTimeInSeconds': {'$lte': parseInt(filter.totalTimeInSeconds)}
   		}).limit(limit);
    } else { // cuisine empty
      console.log("all performing db query - cusine empty")
      return this.find({
        '$text': {$search: query},
        'fullData.nutritionEstimates.0.attribute': 'FAT_KCAL',
        'fullData.nutritionEstimates.0.value': {'$lte': parseInt(filter.calories)},
        'fullData.nutritionEstimates': {'$elemMatch': {value: {'$lte': parseInt(filter.calories)}}},
        'fullData.totalTimeInSeconds': {'$lte': parseInt(filter.totalTimeInSeconds)}
      }).limit(limit);
    }
	} else {
    if (filter.calories === '') { // calories empty
      return this.find({
  			'$text': {$search: query},
  			'fullData.totalTimeInSeconds': {'$lte': parseInt(filter.totalTimeInSeconds)},
  			'fullData.attributes.cuisine': {'$all': [filter.cuisine]}
  		}).limit(limit);
    } else {
      console.log("all performing db query")
      return this.find({
        '$text': {$search: query},
        'fullData.nutritionEstimates.0.attribute': 'FAT_KCAL',
        'fullData.nutritionEstimates.0.value': {'$lte': parseInt(filter.calories)},
        'fullData.totalTimeInSeconds': {'$lte': parseInt(filter.totalTimeInSeconds)},
        'fullData.attributes.cuisine': {'$all': [filter.cuisine]}
      }).limit(limit);
    }
	}
};

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
