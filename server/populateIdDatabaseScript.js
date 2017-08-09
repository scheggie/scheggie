var rp = require('request-promise');
var request = require('request');
const config = require('../config.js');

const foodParameter = 'salad';
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
  'cheese'
];


var options = {
  uri: `http://api.yummly.com/v1/api/recipes?_app_id=${config.APP_ID}&_app_key=${config.APP_KEY}&allowedDiet[]=392^Vegetarian&q=${foodParameter}&requirePictures=true&maxResult=${resultLimit}`,
  json: true
};
 
rp(options)
  .then(data => {
    console.log(`Data was succesfully searched fetched`, data);
  })
  .catch(err => {
    console.log(`Failed to fetch data`);
  });

