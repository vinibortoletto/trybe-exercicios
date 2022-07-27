const books = require('./books');

const getAuthors = () => {
  return (
    books
      .reduce((authors, book) => `${authors}, ${book.author.name}`, '')
      .replace(', ', '') + '.'
  );
};

console.log(getAuthors());
