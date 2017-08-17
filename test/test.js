/*
-Note: in order to run these tests, make sure to first npm-install then to run 'mocha' in the terminal
*/

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/index');
var bodyParser = require('body-parser');
var should = chai.should();

chai.use(chaiHttp);

it('POST `/login` endpoint should have 200 status', function(done) {
  chai.request(server.server)
    .post('/login')
    .send('8888888888')
    .end(function(err, res){
      res.should.have.status(200);
      if (err) throw err;
      done();
    });
});

it('POST `/login` endpoint should return a string value for users not in the database', function(done) {
  chai.request(server.server)
    .post('/login')
    .send('8888888888')
    .end(function(err, res){
      res.body.should.be.a('string');
      if (err) throw err;
      done();
    });
});

it('POST `/addToCalendar` endpoint should have 200 status', function(done) {
  chai.request(server.server)
    .post('/addToCalendar')
    .send('')
    .end(function(err, res){
      res.should.have.status(200);
      if (err) throw err;
      done();
    });
});

it('POST `/removeFromCalendar` endpoint should have 200 status', function(done) {
  chai.request(server.server)
    .post('/removeFromCalendar')
    .send('')
    .end(function(err, res){
      res.should.have.status(200);
      if (err) throw err;
      done();
    });
});

it('POST `/addToFavorites` endpoint should have 200 status', function(done) {
  chai.request(server.server)
    .post('/addToFavorites')
    .send('')
    .end(function(err, res){
      res.should.have.status(200);
      if (err) throw err;
      done();
    });
});

it('POST `/removeFromFavorites` endpoint should have 200 status', function(done) {
  chai.request(server.server)
    .post('/removeFromFavorites')
    .send('')
    .end(function(err, res){
      res.should.have.status(200);
      if (err) throw err;
      done();
    });
});

it('GET `/recipeSearch` endpoint should have 200 status', function(done) {
  chai.request(server.server)
    .get('/recipeSearch')
    .send('')
    .end(function(err, res){
      res.should.have.status(200);
      if (err) throw err;
      done();
    });
});