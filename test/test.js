var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./index');
var should = chai.should();

chai.use(chaiHttp);

it('POST requests to the login endpoint should work', function(done) {
  chai.request(server)
    .post('/login')
    .send({'facebookId': '1254345234'})
    .end(function(err, res){
      res.should.have.status(200);
      res.body.should.have.property('SUCCESS');
      res.body.SUCCESS.should.have.property('facebookId');
    });
});



