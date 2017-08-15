const rp = require('request-promise');
const request = require('request');
const config = require('../config.js');
const Recipe = require('./recipes.js');
const db = require('./index.js');

var queryList = [];
var fullObjectList;

Recipe.find({}, (err, recipes) => {
  if (err) return handleError(err);
  sampleRecipeList = recipes.slice(0, 20);
  const timeBase = 4000;
  sampleRecipeList.forEach((recipe, index) => {
    if (recipe.fullData === null) {
      setTimeout(() => {
        rp({
          uri: `http://api.yummly.com/v1/api/recipe/${recipe.abridgedData.id}?_app_id=${config.YUMMLY_APP_ID}&_app_key=${config.YUMMLY_APP_KEY}`
        })
        .then(data => {
          recipe.fullData = JSON.parse(data);
          recipe.fullDataSorter = true;
          recipe.save();
          console.log('recipe index:', index, 'fullDataSorter:', recipe.fullDataSorter);
        })
        .catch(err => {
          console.log(err);
        });
      }, timeBase * index);
    }
  });
});
