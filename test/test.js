var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {

  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });

  it('respond with asdf', function(done) {
    request(app).get('/asdf').expect('asdf', done);
  });

  it('respond with yxcv', function(done) {
    request(app).get('/yxcv').expect('yxcv', done);
  });

});