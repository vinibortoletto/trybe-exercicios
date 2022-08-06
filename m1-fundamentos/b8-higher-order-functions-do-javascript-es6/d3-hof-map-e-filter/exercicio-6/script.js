const books = require('../books');

const filterSciFiAndFantasyAuthors = (books) => {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name)
    .sort();
};

console.log(filterSciFiAndFantasyAuthors(books));
