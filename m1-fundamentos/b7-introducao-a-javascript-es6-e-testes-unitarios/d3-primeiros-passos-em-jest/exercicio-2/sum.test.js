const sum = require('./sum');

describe('sum', () => {
  it('1. should be a function', () => {
    expect(typeof sum).toBe('function');
  });

  it('2. should return the correct value', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(19, 13)).toBe(32);
  });

  it('3. should throw error if parameters are not of type number', () => {
    expect(() => sum()).toThrow();
  });

  it('4. should match error message', () => {
    expect(() => sum()).toThrow('Parameters must be of type number.');
  });
});
