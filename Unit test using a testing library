const assert = require('assert');
const supertest = require('supertest');
const server = supertest.agent('http://localhost:3000');

describe('username conflict test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'haochenli',
        'email': 'enqqqqa@google.com',
        'phone number': '123123123',
        'full name': 'asdasd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 409);
        assert.equal(res.body.error, 'username conflicts!');
        done();
      });
  });
});


describe('email conflict test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'chenli',
        'email': 'lihaohen@qq.com',
        'phone number': '123123123',
        'full name': 'asdasd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 409);
        assert.equal(res.body.error, 'email conflicts!');
        done();
      });
  });
});

describe('phone number conflict test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'ass',
        'email': 'asd@qq.com',
        'phone number': '139981232',
        'full name': 'asdasd',
        'password': 'asdasdasd',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 409);
        assert.equal(res.body.error, 'phone number conflicts!');
        done();
      });
  });
});


describe('user name void test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': '',
        'email': 'lihaohen@qq.com',
        'phone number': '123123123',
        'full name': 'asdasd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the username is void');
        done();
      });
  });
});

describe('email void test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'lllll',
        'email': '',
        'phone number': '123123123',
        'full name': 'asdasd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the email is void');
        done();
      });
  });
});
describe('full name void test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'lllll',
        'email': 'www@163.com',
        'phone number': '1231451',
        'full name': ' ',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the full name is void');
        done();
      });
  });
});
describe('password void test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'lllll',
        'email': 'www@163.com',
        'phone number': '10101010',
        'full name': 'asdasd',
        'password': '',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the password is void');
        done();
      });
  });
});
describe('phone number void test', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'lllll',
        'email': 'www@163.com',
        'phone number': '',
        'full name': 'asdasd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the phone number is void');
        done();
      });
  });
});
describe('the phone number format check', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'aaaaa',
        'email': 'lihaohaan@qq.com',
        'phone number': '1231a23123',
        'full name': 'asdasd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the phone number is invalid');
        done();
      });
  });
});

describe('the full name format check', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'aaaaa',
        'email': 'lihaohaan@qq.com',
        'phone number': '123123123',
        'full name': 'asd11asd',
        'password': 'lihaochen1992',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the full name is invalid');
        done();
      });
  });
});

describe('email format is wrong', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'ass',
        'email': 'liaoheasn.qq.com',
        'phone number': '123123',
        'full name': 'asdasd',
        'password': '',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 400);
        assert.equal(res.body.error, 'the email format is invalid');
        done();
      });
  });
});
describe('create successfully', function() {
  it('login success', function(done) {
    server
      .post('/api/signup')
      .send({'username': 'lllll',
        'email': 'wwwas@163.com',
        'phone number': '10101010',
        'full name': 'asdsasd',
        'password': 'lihaoc11henwww',
      })
      .expect('Content-type,/json/')
      .end(function(err, res) {
        assert.equal(res.status, 201);
        // assert.equal(res.body.error, 'the password is void');
        done();
      });
  });
});
