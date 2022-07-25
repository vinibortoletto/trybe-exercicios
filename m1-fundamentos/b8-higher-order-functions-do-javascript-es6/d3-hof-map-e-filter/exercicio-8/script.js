const books = require('../books');

const getAuthorWith3Initials = (books) => {
  return books.find(
    (book) =>
      book.author.name.split(' ').filter((word) => word.endsWith('.'))
        .length === 3
  ).name;
};

console.log(getAuthorWith3Initials(books));
