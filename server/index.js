const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const config = require('../config.js');
const db = require('../databases');
const User = require('../databases/users.js');
const Recipe = require('../databases/recipes.js');

app.use(express.static(__dirname + '/../client/dist'));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(function(user, done) {
//   // console.log('Serialize User: ', user);
//   done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//   // console.log('Deserialize User: ', user);
//   done(null, user);
// })

// passport.use(new Strategy({
//     clientID: config.FACEBOOK_clientID,
//     clientSecret: config.FACEBOOK_clientSecret,
//     callbackURL: 'http://localhost:3000/auth/facebook/callback'
//   },
//   function(accessToken, refreshToken, profile, done) {
//     console.log(profile);
//     done(null, 'test');
//     // User's Facebook profile is supplied as the user record
//     User.findOne({ 'facebookId' : profile.id }, function(err, user) {
//
//       // if there is an error, stop everything and return that
//       // ie an error connecting to the database
//       if (err) {
//         return done(err);
//       }
//
//       if (user) {
//         return done(null, user); // user found, return that user
//       } else {
//         // if there is no user found with that facebook id, create them
//         var newUser = new User();
//         // set all of the facebook information in our user model
//         newUser.facebookId  = profile.id; // set the users facebook id
//         newUser.favRecipes = {}; //we set the user's favorite recipes to a blank object
//         newUser.weeks = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; // I thought we'd start with a blank object for each day. Then, if a user adds a recipe to a meal for a day we'll begin adding new key-value pairs here
//         newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // we will need to look at the passport user profile to see how names are returned. This was the suggestion in the article though
//         newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
//
//         // save our user to the database
//         newUser.save(function(err) {
//           if (err) {
//             throw err;
//           }
//           // if successful, return the new user
//           return done(null, newUser);
//         });
//       }
//     });*/
//   }
// ));

// passport.use(new Strategy({
//     clientID: config.FACEBOOK_clientID,
//     clientSecret: config.FACEBOOK_clientSecret,
//     callbackURL: 'http://localhost:3000/auth/facebook/callback'
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // User's Facebook profile is supplied as the user record
//     process.nextTick(function() {

//     User.findOne({ 'facebookId' : profile.id }, function(err, user) {

//     // if there is an error, stop everything and return that
//     // ie an error connecting to the database
//     if (err) {
//       return done(err);
//     }

//     if (user) {
//       return done(null, user); // user found, return that user
//     } else {
//       // if there is no user found with that facebook id, create them
//         var newUser            = new User();
//         // set all of the facebook information in our user model
//         newUser.facebookId  = profile.id; // set the users facebook id                   
//         newUser.favRecipes = {}; //we set the user's favorite recipes to a blank object
//         newUser.week_one = [{}, {}, {}, {}, {}, {}, {}]; // I thought we'd start with a blank object for each day. Then, if a user adds a recipe to a meal for a day we'll begin adding new key-value pairs here
//         newUser.week_two = [{}, {}, {}, {}, {}, {}, {}];
//         newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // we will need to look at the passport user profile to see how names are returned. This was the suggestion in the article though
//         newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
        
//         // save our user to the database
//         newUser.save(function(err) {
//             if (err)
//                 throw err;

//             // if successful, return the new user
//             return done(null, newUser);
//         });
//       }
//     });
//   })
// }

/*

Thoughts on Meal Add/Remove Flow:

-User is going to login 
-Immediately upon login, we run a function that populates state for the user with their latest values from the database
-> assuming a completely new user, the week state for them would look as follows:
 
this.state = {
  week_one: [{}, {}, {}, {}, {}, {}, {}],
  week_two: [{}, {}, {}, {}, {}, {}, {}]
}

Some sample front-end code for populating breakfast, lunch, and dinner values on the front-end based on the state ('week one' is used here, but this could also be done for 'week two' as well)
for (var i = 0; i < 7; i++) {
  if (!week_one[i].breakfast) {
    return 'Empty'
  }
  else {
    return week_one[i].breakfast;
  }

  if (!week_one[i].lunch) {
     return 'Empty'
  }
  else {
    return week_one[i].lunch;
  }

  if (!week_one[i].dinner) {
     return 'Empty'
  }
  else {
    return week_one[i].dinner;
  }
}

-We pass an onChange handler down from the highest level of the app to each calendar entry component. In the event of a change (either add or remove a meal), 
we connect to the DB, update those values, then reset state for the user and re-render things
-We keep track of values in the calendar on the front-end as follows:
-> Name = Breakfast/Lunch/Dinner
-> Id = 0, 1, 2, 3, 4, etc. (Day of Week)
-> Class = Week (i.e. Week_One, Week_Two)

-For example, if a user updates lunch for Week 1, Lunch, on Wednesday, we would do the following:

onChange={this.state['class']['id']['name'] = name} 
-We then re-render things 

*/
 
// AUTHENTICATION ROUTES
// ************************************

// Login button leads here
// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

//

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/', (req, res) => {
  console.log(req.user);
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/login.html'));
});


// RECIPE ROUTES
// ************************************
app.post('/addToCalendar', (req, res) => {
  var week_number = req.body.weekNumber;
  var day_id = req.body.dayId;
  var meal = req.body.meal;
  var recipe_id = req.body.recipeId;
  var facebookId = req.body.facebookId;
  dbUsers.User.find({'facebookId': facebookId}).
  exec(user => user[week_number][day_id][meal] = recipe_id);
  user.save(err => {
    if (err) {
      throw err;
    }
    res.send('Recipe added to calendar');
  });
});

app.post('/removeFromCalendar', (req, res) => {
  var week_number = req.body.weekNumber;
  var day_id = req.body.dayId;
  var meal = req.body.meal;
  var facebookId = req.body.facebookId;
  dbUsers.User.find({'facebookId': facebookId}).
  exec(user => delete user[week_number][day_id][meal]);
  user.save(err => {
    if (err) {
      throw err;
    }
    res.send('Recipe removed from calendar');
  });
});

app.post('/addToFavorites', (req, res) => {
// recipe should be passed into the ajax request via click handler.
// favorites is an object on the user table.

// find user in db: facebookId will need to be in the data param of the ajax request.
  User.find({'facebookId': req.body.facebookId}).
    exec(user => {
      // if recipe name is not already in favorites object
      // ** Passing recipe name into ajax request as data param **
      if (!user.favorites[req.body.query]) {
        // Set name equal to full recipe
        Recipe.find({'name': req.body.query}).
        exec(recipe => user.favorites[req.body.query] = JSON.parse(recipe));
        user.save(err => {
          if (err) {
            throw err;
          }
          res.send('Recipe added to favorites');
        });
      }
    });
});

app.post('/removeFromFavorites', (req, res) => {
  User.findOne().
  where('facebookId').equals(req.body.facebookId).
    exec(user => {
      if (user.favorites.name) {
        delete user.favorites.name;
        user.save(err => {
          if (err) {
            throw err;
          }
          res.send('Recipe removed from favorites');
        });
      }
    });
});

app.get('/recipeSearch', (req, res) => {
  // Need to pass search term into ajax call
  Recipe.find({'name': {$regex : '.*${req.body.query}.*'}}).
    limit(10).
    exec(recipes => res.json(recipes));
});


// ************************************


const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Scheggie app listening at http://${host}:${port}`);
});
