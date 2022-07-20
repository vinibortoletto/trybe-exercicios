const myRemove = require('./myRemove');

describe('myRemove', () => {
  it('1. should be a function', () => {
    expect(typeof myRemove).toBe('function');
  });

  it('2. should return the correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('3. should not return the same array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
