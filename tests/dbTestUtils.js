const mongoose = require('mongoose');

const state = {
  db: null
}

const uri = 'mongodb://localhost/test';

exports.connect = function(done) {
  if (state.db) {
    return done();
  }

  mongoose.connect(uri, function(err, db) {
    if (err) return done(err);
    state.db = db;
    done();
  });
}

const mongooseDB = mongoose.connection;

mongooseDB.on('error', console.error.bind(console, 'connection error:'));

mongooseDB.once('open', function() {
  console.log('Connected to test DB');
});

exports.getDB = function() {
  return state.db;
}

exports.drop = function(done) {
  if (!state.db) return done()
  // This is faster then dropping the database
  state.db.collections(function(err, collections) {
    async.each(collections, function(collection, cb) {
      if (collection.collectionName.indexOf('system') === 0) {
        return cb();
      }
      collection.remove(cb);
    }, done);
  })
}

exports.fixtures = function(data, done) {
  const db = state.db
  if (!db) {
    return done(new Error('Missing database connection.'));
  }

  const names = Object.keys(data.collections);
  async.each(name, function(name, cb) {
    db.createCollection(name, function(err, collection) {
      if (err) {
        return cb(err);
      }
      collection.insert(data.collections[name], cb);
    })
  }, done);
}

