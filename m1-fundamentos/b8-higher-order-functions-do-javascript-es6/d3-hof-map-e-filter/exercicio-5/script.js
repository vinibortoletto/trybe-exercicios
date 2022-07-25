const books = require('../books');

const getOldestBooks = (books) => {
  return books
    .filter((book) => 2022 - book.releaseYear >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};

console.log(getOldestBooks(books));
