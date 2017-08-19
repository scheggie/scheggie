const mongoose = require('mongoose');
const async = require('async');
const _ = require('lodash');

const User = require('../databases/users.js');
const Recipe = require('../databases/recipes.js');

const state = {
  db: null
}

const uri = 'mongodb://localhost/test';

exports.connect = function(done) {
  if (state.db) {
    return done();
  }

  mongoose.connect(uri, function(err) {
    if (err) return done(err);
    state.db = mongoose.connection;
    done();
  });
}

exports.disconnect = function(done) {
  mongoose.disconnect();
};

const mongooseDB = mongoose.connection;
    
mongooseDB.on('error', console.error.bind(console, 'connection error:'));

mongooseDB.once('open', function() {
  console.log('Connected to test DB');
});

exports.getDB = function() {
  return state.db;
}

exports.drop = function(done) {
  if (!state.db) {
    return done();
  }
  const collections = _.keys(mongooseDB.collections);
  async.forEach(collections, (collectionName, done) => {
    let collection = mongooseDB.collections[collectionName];
    collection.drop(err => {
      if (err && err.message !== 'ns not found') {
        done(err);
      }
      done(null);
    });
  }, done);
}

exports.fixtures = function(data, done) {
  const db = state.db
  if (!db) {
    return done(new Error('Missing database connection.'));
  }

  Promise.resolve(data.users.forEach(user => {
      let newUser = new User;
      newUser.favRecipes = user.favRecipes;
      newUser.facebookId = user.facebookId;
      newUser.name = user.name;
      newUser.email = user.email;
      newUser.week_one = user.week_one;
      newUser.week_two = user.week_two;
      newUser.save();
    }))
    .then(() => {
      data.recipes.forEach(recipe => {
        let newRecipe = new Recipe;
        newRecipe.name = recipe.name;
        newRecipe.fullDataSorter = recipe.fullDataSorter;
        newRecipe.rating = recipe.rating;
        newRecipe.abridgedData = recipe.abridgedData;
        newRecipe.fullData = recipe.fullData;
        newRecipe.save();
      });    
      done();
    });

}

