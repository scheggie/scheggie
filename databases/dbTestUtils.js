const MongoClient = require('mongodb').MongoClient
  , async = require('async');

const state = {
  db: null,
  mode: null,
}

const uri = 'mongodb://127.0.0.1:27017/test';

exports.MODE_TEST = 'mode_test';

exports.connect = function(mode, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(uri, function(err, db) {
    if (err) return done(err);
    state.db = db;
    state.mode = mode;
    done();
  });
}

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

