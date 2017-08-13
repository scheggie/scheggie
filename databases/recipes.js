var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected to the DB!');
});

var recipeSchema = mongoose.Schema({
  name: {type: String, unique: true},
  fullDataSorter: Boolean,
  rating: Number,
  abridgedData: {},
  fullData: {}
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports.db = db;
module.exports.recipeSchema = recipeSchema;
module.exports.Recipe = Recipe;
