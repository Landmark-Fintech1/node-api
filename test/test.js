// https://mochajs.org/#asynchronous-code

const request = require('supertest');
const assert = require('assert');
const api = require('../index.js');
const random_test = require('../random_test.js');

describe('GET /', () => {
  it('respond with json', (done) => {
    request(api)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});

describe('#random_test()', () => {
  it('random_test result', (done) => {
    assert.equal(random_test(), 'random test')
    done()
  });
});


