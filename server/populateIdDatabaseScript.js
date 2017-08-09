const rp = require('request-promise');
const request = require('request');
const config = require('../config.js');

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
  'bean'
];

foodTypes.forEach(foodType => {
  rp({
    uri: `http://api.yummly.com/v1/api/recipes?_app_id=${config.APP_ID}&_app_key=${config.APP_KEY}&allowedDiet[]=392^Vegetarian&q=${foodType}&requirePictures=true&maxResult=${resultLimit}`,
    json: true
  })
  .then(data => {
    data.forEach(recipe => {
      let newRecipe = new Recipe(data);
      newRecipe.save(err => {
        if (err) {
          throw err;
        } else {
          console.log('Data successfully saved');
        }
      });
    });
  })
  .catch(err => {
    console.log(`Failed to fetch data`);
  });
});