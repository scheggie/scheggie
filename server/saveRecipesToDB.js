const rp = require('request-promise');
const request = require('request');
const config = require('../config.js');
const dbRecipes = require('../databases/recipes.js');

var queryList = [];
var fullObjectList;
dbRecipes.Recipe.find({}, (err, recipes) => {
  if (err) return handleError(err);
  sampleRecipeList = recipes.slice(0, 21);
  sampleRecipeList.forEach(recipe => {
    queryList.push(recipe.name);
  });
  let timeBase = 4000;
  queryList.forEach((recipe, index) => {
    setTimeout(() => {
      rp({
        uri: `http://api.yummly.com/v1/api/recipe/${recipe}?_app_id=${config.YUMMLY_APP_ID}&_app_key=${config.YUMMLY_APP_KEY}`
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    }, timeBase * index);
  });
});