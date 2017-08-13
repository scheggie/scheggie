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

passport.use(new Strategy({
    clientID: config.FACEBOOK_clientID,
    clientSecret: config.FACEBOOK_clientSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // User's Facebook profile is supplied as the user record

    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(...arguments);
    done(null, profile);
  }
));


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
//find user in db
  // dbUsers.User.find({'id': userID})
    // .then(user => {
      // user.favorites.recipeName = fullRecipe; (**not sure yet what recipeName variable will be called. TBD**)
      // user.save(err => {
    //     if (err) {
    //       throw err;
    //     }
    //     res.send('Recipe added to favorites');
    //   })
    // })


// assuming user has favorites property in db...
  // check if user.favorites['recipe name'] already exists
  // if not, add recipe to property


});

app.post('/removeFromFavorites', (req, res) => {
  
});

app.get('/recipeSearch', (req, res) => {
  // dbRecipes.Recipe.find({'name': {$regex : '.*${req.query}.*'}})
});


// ************************************


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Scheggie app listening at http://${host}:${port}`);
});
