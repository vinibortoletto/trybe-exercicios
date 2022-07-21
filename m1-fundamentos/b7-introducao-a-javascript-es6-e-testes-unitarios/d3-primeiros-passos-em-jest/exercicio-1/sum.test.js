const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('return error if parameters are not of type number', () => {
  expect(() => sum()).toThrow();
});

test('return correct error message', () => {
  expect(() => sum()).toThrowError(
    new Error('Parameters must be of type number.')
  );
});
