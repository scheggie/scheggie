//This script is used to populate the DB when new users sign-up for the first time 

const rp = require('request-promise');
const request = require('request');
const config = require('../config.js');
const db = require('../databases/users.js');

const resultLimit = 500;
const foodTypes = [
  'salad', 
  'soup', 
  'pizza', 
  'burger', 
  'sandwich', 
  'fries', 
  'rice', 
  'pasta', 
  'tofu',
  'tempeh',
  'soy',
  'lentil', 
  'chili', 
  'quinoa', 
  'taco', 
  'burrito', 
  'eggplant', 
  'squash', 
  'mushroom', 
  'pesto', 
  'casserole',
  'daal',
  'kale',
  'spinach',
  'cheese',
  'hummus',
  'bean',
  'potato',
  'omelette',
  'oatmeal',
  'curry'
];

let timeBase = 4000;
foodTypes.forEach((foodType, index) => {
  setTimeout(() => {
    rp({
      uri: `http://api.yummly.com/v1/api/recipes?_app_id=${config.YUMMLY_APP_ID}&_app_key=${config.YUMMLY_APP_KEY}&allowedDiet[]=387^Lacto-ovo vegetarian&q=${foodType}&requirePictures=true&maxResult=${resultLimit}`
    })
    .then(data => {
      data = JSON.parse(data);
      data = data.matches;
      data.forEach(recipe => {
        if (recipe.rating >= 4) {
          let newRecipe = new db.Recipe;
          newRecipe.name = recipe.id;
          newRecipe.fullDataSorter = false;
          newRecipe.rating = recipe.rating;
          newRecipe.abridgedData = recipe;
          newRecipe.fullData = null;
          newRecipe.save(err => {
            if (err) {
              throw err;
            } else {
              console.log('Data successfully saved');
            }
          });
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
  }, timeBase * index);
});