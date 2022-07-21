const { sum, throwError } = require('./sum');

describe('sum', () => {
  it('1. should be a function', () => {
    expect(typeof sum).toBe('function');
  });

  it('2. should return the correct value', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(19, 13)).toBe(32);
  });

  it('3. should throw error if parameters are not of type number', () => {
    expect(() => throwError()).toThrow();
  });

  it('4. should match error message', () => {
    expect(() => throwError()).toThrow('Parameters must be of type number.');
  });
});
