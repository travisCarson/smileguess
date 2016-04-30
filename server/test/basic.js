const expect = require('chai').expect;
const request = require('request');

const serverURL = 'http://127.0.0.1:1234/test';

describe('Basic Server Functions:', () => {
  describe('Server status:', () => {
    it('will respond to api calls', (done) => {
      const options = {
        method: 'GET',
        uri: serverURL,
      };
      request(options, (error, res) => {
        if (error && error.code === 'ECONNREFUSED') {
          throw new Error('Connection refused, are you sure the server is running?');
        }
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});
