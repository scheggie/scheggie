const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const config = require('../config.js');

app.configure(function() {
  app.use(express.static(__dirname + '/../client/dist'));
  app.use(passport.initialize());
  app.use(passport.session());
});


passport.use(new Strategy({
    clientID: config.FACEBOOK_clientID,
    clientSecret: config.FACEBOOK_clientSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    // User's Facebook profile is supplied as the user record

    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log('accessToken', accessToken, 'refreshToken', refreshToken, 'profile', profile);
    return cb(null, profile);
  }
));




// ************************************
  
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });





// ************************************


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Scheggie app listening at http://${host}:${port}`);
});
