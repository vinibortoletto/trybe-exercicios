const filterBooks = (books) => {
  books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  );
};

console.log(filterBooks(books));
