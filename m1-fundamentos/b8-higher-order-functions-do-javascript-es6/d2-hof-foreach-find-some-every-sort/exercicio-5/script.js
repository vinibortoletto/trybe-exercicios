const books = require('./books');

const getAuthorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947);
};

// -----------------------------------------------------------------|

const getBookWithShortestName = () => {
  let shortestName;

  books.forEach((book) => {
    if (!shortestName || shortestName.length > book.name.length) {
      shortestName = book.name;
    }
  });

  return shortestName;
};

// -----------------------------------------------------------------|

const getBookWith26Chars = () => books.find((book) => book.name.length === 26);

// -----------------------------------------------------------------|

const getSortedBooks = () => {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
};

// -----------------------------------------------------------------|

const checkIfEveryAuthorWasBornInXX = () => {
  return books.every((book) => book.author.birthYear > 1900);
};

// -----------------------------------------------------------------|

const checkIfBookWasReleaseInThe80s = () => {
  return books.some((book) => book.releaseYear >= 80 && book.releaseYear < 90);
};

// -----------------------------------------------------------------|

const checkIfAuthorBirthdayIsUnique = () => {
  return books.every(
    (everyBook) =>
      !books.some(
        (someBook) =>
          someBook.author.birthYear === everyBook.author.birthYear &&
          someBook.author.name !== everyBook.author.name
      )
  );
};
