const books = require('../books');

const bookInfoArray = (books) => {
  books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
};

console.log(bookInfoArray(books));
