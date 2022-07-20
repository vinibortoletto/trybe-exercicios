const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be of type number.');
  }

  return a + b;
};

module.exports = sum;
