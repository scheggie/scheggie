const mocha = require('mocha');
const should = require('should');
const db = require('./dbTestUtils.js');

const sampleUserData = {
  "users": [
    {"_id" : "59935f7210f4eec889a1039f", "favRecipes": {}, "facebookId" : "10155254108838780", "name" : "John Doe", "email" : "JohnD@gmail.com", "week_two" : [ null, null, null, null, null, null, null ], "week_one" : [ null, null, null, null, null, null, null ], "__v" : 0 },
    {"_id" : "64935f7210f4eec889a1039f", "favRecipes": {}, "facebookId" : "10155256408838780", "name" : "Joe Schmoe", "email" : "JoeS@gmail.com", "week_two" : [ null, null, null, null, null, null, null ], "week_one" : [ null, null, null, null, null, null, null ], "__v" : 0 }
  ]
};

const User = require('../databases/users.js');
const Recipe = require('../databases/recipes.js');

describe('Model User Tests', () => {

  before(done => {
    db.connect(done);
  });

  beforeEach(done => {
    db.drop((users, err) => {
      if (err) {
        return done(err);
      }
      db.fixtures(sampleUserData, done);
    })
  });

  it('getUserById ', (done) => {
    User.getUserById("10155254108838780").
      then(user => {
        console.log(user);
        user.name.should.eql('John Doe');
      });
     done(); 
  });

});
