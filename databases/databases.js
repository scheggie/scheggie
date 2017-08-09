var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected to the DB!');
});

var recipeSchema = mongoose.Schema({
    name: String,
   	fullDataSorter: Boolean,
    rating: Number,
    abridgedData: Schema.Types.Mixed, 
    fullData: Schema.Types.Mixed
});

var Recipe = mongoose.model('Recipe', recipeSchema);

/*
Note: 
-This code for the Search function is going to need to be adjusted 

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
*/

