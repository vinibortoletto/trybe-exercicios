const books = require('./books');

const getAverageAge = () => {
  const sum = books.reduce(
    (sum, book) => (sum += book.releaseYear - book.author.birthYear),
    0
  );

  return sum / books.length;
};

console.log(getAverageAge());
