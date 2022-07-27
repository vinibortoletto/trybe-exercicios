const books = require('./books');

const getBookWithLongestName = () => {
  return books.reduce((bookWithLongestName, book) =>
    bookWithLongestName.name.length > book.name.length
      ? bookWithLongestName
      : book
  );
};

console.log(getBookWithLongestName());
