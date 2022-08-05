const sum = (n1, n2) => {
  return n1 + n2;
};

const displayResult = (n1, n2, callback) => {
  setTimeout(() => {
    const result = callback(n1, n2);
  }, 500);
};

// console.log(displayResult(1, 2, sum));
module.exports = displayResult;
