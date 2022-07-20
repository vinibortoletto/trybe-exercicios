const myFizzBuzz = (number) => {
  const fizz = number % 3 === 0;
  const buzz = number % 5 === 0;
  const fizzBuzz = fizz && buzz;

  if (typeof number !== 'number') return false;
  if (fizzBuzz) return 'fizzBuzz';
  if (fizz) return 'fizz';
  if (buzz) return 'buzz';

  return number;
};

module.exports = myFizzBuzz;
