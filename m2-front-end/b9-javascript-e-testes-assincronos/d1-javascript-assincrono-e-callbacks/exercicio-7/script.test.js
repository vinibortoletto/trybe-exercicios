const { exportAllDeclaration } = require('@babel/types');
const exp = require('constants');
const displayResult = require('./script');

describe('displayResult', () => {
  it('1. should display result correctly', (done) => {
    displayResult(1, 2, (n1, n2) => {
      try {
        expect(n1 + n2).toBe(3);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
