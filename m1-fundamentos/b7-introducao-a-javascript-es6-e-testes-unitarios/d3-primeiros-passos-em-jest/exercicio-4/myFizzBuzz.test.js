const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  it('1. should be a function', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('2. should return "fizzBuzz" if number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzBuzz');
  });

  it('3. should return "fizz" if number is divisible only by 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('4. should return "buzz" if number is divisible only by 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('5. should return number if its not divisible by 3 nor 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('6. should return "false" if number is not of type number ', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});
