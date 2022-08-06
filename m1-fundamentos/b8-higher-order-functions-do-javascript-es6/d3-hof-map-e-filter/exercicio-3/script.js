const authorsArray = (books) => {
  books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      name: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);
};

console.log(authorsArray(books));
