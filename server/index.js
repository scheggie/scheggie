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
const _ = require('lodash');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
// app.use(bodyParser.text({ type: 'text/html' }))
// app.use(bodyParser.text({ type: 'text/plain' }))
// bodyParser.urlencoded({ extended: false })

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

//this route works 
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
        email: req.body.email,
        favRecipes: {},
        week_one: _.map(_.range(7), () => ({})),
        week_two: _.map(_.range(7), () => ({}))
      });
      return user.save();
    })
    .then((user) => {
      req.session.userId = user._id;
      res.send('User has been logged in');
    });
});


// RECIPE ROUTES
// ************************************

app.post('/addToCalendar', (req, res) => {
  var weekNumber = req.body.weekNumber;
  var dayId = req.body.dayId;
  var meal = req.body.meal;
  var recipeId = req.body.recipeId;
  var facebookId = req.body.facebookId;
  User.findOne({'facebookId': facebookId}).then((user) => {
    var weekarray = user[weekNumber];
    if (typeof(weekarray[dayId]) !== 'object') {
      weekarray[dayId] = {[meal]: recipeId}
    }
    else {
      weekarray[dayId][meal] = recipeId;
      console.log('the week array is ' + weekarray);
    }
  User.findOneAndUpdate({'facebookId': facebookId}, {[weekNumber]: weekarray}, function(err, user) {
    if (err) throw err;
    res.send('the recipe has been added to the calendar!');
      });
    })
  })

app.post('/removeFromCalendar', (req, res) => {
  var weekNumber = req.body.weekNumber;
  var dayId = req.body.dayId;
  var meal = req.body.meal;
  var recipeId = req.body.recipeId;
  var facebookId = req.body.facebookId;
   User.findOne({'facebookId': facebookId}).then((user) => {
    var weekarray = user[weekNumber];
    if (Object.keys(weekarray[dayId]).length === 1) {
      weekarray[dayId] = null;
    }
    else {
      delete weekarray[dayId][meal];
  }
  User.findOneAndUpdate({'facebookId': facebookId}, {[weekNumber]: weekarray}, function(err, user) {
    if (err) throw err;
    res.send('the recipe has been removed from the calendar!');
    });
  })
})

app.post('/addToFavorites', (req, res) => {
  User.getUserById(req.body.id)
    .then(user => {
      User.saveRecipeToFavorites(user, req.body.recipe);
    })
    .then(user => {
      res.send('Recipe added to favorites')
    });
});

app.post('/removeFromFavorites', (req, res) => {
  User.getUserById(req.body.id)
    .then(user => {
      User.removeRecipeFromFavorites(user, req.body.recipe);
    })
    .then(user => {
      res.send('Recipe removed from favorites')
    });
});

//this route works
app.get('/recipeSearch', (req, res) => {
  Recipe.getFullRecipesForSearchResults(req.query.query).
    then(recipes => {
      res.json(recipes);
    });
});

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


// ************************************


const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Scheggie app listening at http://${host}:${port}`);
});
