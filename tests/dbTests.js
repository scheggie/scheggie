const should = require('should');
const db = require('./dbTestUtils.js');

const dataUser1 = { "_id" : "59935f7210f4eec889a1039f", "favRecipes": {}, "facebookId" : "10155254108838780", "name" : "John Doe", "email" : "JohnD@gmail.com", "week_two" : [ null, null, null, null, null, null, null ], "week_one" : [ null, null, null, null, null, null, null ], "__v" : 0 };

const User = require('../databases/users.js');
const Recipe = require('../databases/recipes.js');

describe('Model User Tests', => {

  before(done => {
    db.connect(done);
  });

  beforeEach(done => {
    db.drop(err => {
      if (err) {
        return done(err);
      }
      db.fixtures(dataUser1, done);
    })
  });

  it()

});