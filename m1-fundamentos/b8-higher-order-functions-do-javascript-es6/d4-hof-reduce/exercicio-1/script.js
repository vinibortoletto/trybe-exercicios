const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = (a, b) => (b % 2 === 0 ? a + b : a);

const result = numbers.reduce(sumEvenNumbers, 0);

console.log(result);
