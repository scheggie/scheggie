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
  'bean'
];

foodTypes.forEach(foodType => {
  rp({
    uri: `http://api.yummly.com/v1/api/recipes?_app_id=${config.APP_ID}&_app_key=${config.APP_KEY}&allowedDiet[]=392^Vegetarian&q=${foodType}&requirePictures=true&maxResult=${resultLimit}`,
    json: true
  })
  .then(data => {
    data.forEach(recipe => {
      if (recipe.rating >= 4) {
        let newRecipe = new Recipe(data);
        newRecipe.name = recipe.name;
        newRecipe.

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
    console.log(`Failed to fetch data`);
  });
});


var Thing = mongoose.model('Thing', schema);

var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.save(callback);