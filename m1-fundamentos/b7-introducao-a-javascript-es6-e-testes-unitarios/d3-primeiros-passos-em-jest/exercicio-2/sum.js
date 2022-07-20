const throwError = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be of type number.');
  }
};

const sum = (a, b) => {
  try {
    throwError(a, b);
    return a + b;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { sum, throwError };
