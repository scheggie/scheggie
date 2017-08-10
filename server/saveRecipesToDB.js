const rp = require('request-promise');
const request = require('request');
const config = require('../config.js');
const db = require('../databases/databases.js');

let recipeList;
db.Recipe.find({}, (err, recipes) => {
  if (err) return handleError(err);
  recipeList = recipes;
  console.log('recipeList length:', recipeList.length);
});


// let timeBase = 4000;
// foodTypes.forEach((foodType, index) => {
//   setTimeout(() => {
//     rp({
//       uri: `http://api.yummly.com/v1/api/recipes?_app_id=${config.YUMMLY_APP_ID}&_app_key=${config.YUMMLY_APP_KEY}&allowedDiet[]=387^Lacto-ovo vegetarian&q=${foodType}&requirePictures=true&maxResult=${resultLimit}`
//     })
//     .then(data => {
//       data = JSON.parse(data);
//       data = data.matches;
//       data.forEach(recipe => {
//         if (recipe.rating >= 4) {
//           let newRecipe = new db.Recipe;
//           newRecipe.name = recipe.id;
//           newRecipe.fullDataSorter = false;
//           newRecipe.rating = recipe.rating;
//           newRecipe.abridgedData = recipe;
//           newRecipe.fullData = null;
//           newRecipe.save(err => {
//             if (err) {
//               throw err;
//             } else {
//               console.log('Data successfully saved');
//             }
//           });
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, timeBase * index);
// });

