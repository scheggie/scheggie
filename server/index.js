const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const config = require('../config.js');

const dbRecipes = require('../databases/recipes.js');
// const dbUsers = require('../databases/users.js');

// app.configure(function() {
app.use(express.static(__dirname + '/../client/dist'));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
  // console.log('Serialize User: ', user);
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  // console.log('Deserialize User: ', user);
  done(null, user);
})
// });

/* Miles' code..making some adjustments below in order to add new users to the DB */
// passport.use(new Strategy({
//     clientID: config.FACEBOOK_clientID,
//     clientSecret: config.FACEBOOK_clientSecret,
//     callbackURL: 'http://localhost:3000/auth/facebook/callback'
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // User's Facebook profile is supplied as the user record

//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//     console.log(...arguments);
//     done(null, profile);
//   }
// ));

passport.use(new Strategy({
    clientID: config.FACEBOOK_clientID,
    clientSecret: config.FACEBOOK_clientSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // User's Facebook profile is supplied as the user record
    process.nextTick(function() {

    User.findOne({ 'facebookId' : profile.id }, function(err, user) {

    // if there is an error, stop everything and return that
    // ie an error connecting to the database
    if (err) {
      return done(err);
    }

    if (user) {
      return done(null, user); // user found, return that user
    } else {
      // if there is no user found with that facebook id, create them
        var newUser            = new User();
        // set all of the facebook information in our user model
        newUser.facebookId  = profile.id; // set the users facebook id                   
        newUser.favRecipes = {}; //we set the user's favorite recipes to a blank object
        newUser.weeks = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; // I thought we'd start with a blank object for each day. Then, if a user adds a recipe to a meal for a day we'll begin adding new key-value pairs here
        newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // we will need to look at the passport user profile to see how names are returned. This was the suggestion in the article though
        newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
        
        // save our user to the database
        newUser.save(function(err) {
            if (err)
                throw err;

            // if successful, return the new user
            return done(null, newUser);
        });
      }
    });
  })
}
 
// AUTHENTICATION ROUTES
// ************************************

// Login button leads here
app.get('/auth/facebook',
  passport.authenticate('facebook'));

//
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/', passport.authenticate('facebook'), (req, res) => {
  console.log(req.user);
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/login.html'));
});


// RECIPE ROUTES
// ************************************
app.post('/addToCalendar', (req, res) => {
  
});

app.post('/removeFromCalendar', (req, res) => {
  
});

app.post('/addToFavorites', (req, res) => {
// recipe should be passed into the ajax request via click handler.
// favorites is an object on the user table.

// find user in db: facebookId will need to be in the data param of the ajax request.
  dbUsers.User.find({'facebookId': req.body.facebookId}).
    exec(user => {
      // if recipe name is not already in favorites object
      // ** Passing recipe name into ajax request as data param **
      if (!user.favorites[req.body.query]) {
        // Set name equal to full recipe
        dbRecipes.Recipe.find({'name': req.body.query}).
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
  dbUsers.User.findOne().
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
  dbRecipes.Recipe.find({'name': {$regex : '.*${req.body.query}.*'}}).
    limit(10).
    exec(recipes => res.json(recipes));
});


// ************************************


const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Scheggie app listening at http://${host}:${port}`);
});
