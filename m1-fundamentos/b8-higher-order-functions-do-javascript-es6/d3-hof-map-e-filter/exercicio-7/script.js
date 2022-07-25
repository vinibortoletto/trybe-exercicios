const books = require('../books');

const getOldestBooksNames = (books) => {
  return books
    .filter((book) => 2022 - book.releaseYear >= 60)
    .map((book) => book.name);
};

console.log(getOldestBooksNames(books));
