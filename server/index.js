const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../webpack.config');
const session = require('express-session');
const bodyParser = require('body-parser')
const app = express();
const config = require('../config.js');
const db = require('../databases');
const User = require('../databases/users.js');
const Recipe = require('../databases/recipes.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  if (req.session.userId) {
    User.findById(req.session.userId)
      .then((user)=>{
        req.user = user;
        next();
      });
  } else {
    next();
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/login', (req, res) => {
  let facebookId = req.body.id;
  User.findOne({facebookId})
    .then((user) => {
      if (user) {
        return user;
      } else {
        throw 'User not found';
      }
    })
    .catch(() => {
      var user = new User({
        facebookId: facebookId,
        name: req.body.name,
        email: req.body.email
      });
      return user.save();
    })
    .then((user) => {
      req.session.userId = user._id;
      res.send();
    });
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
