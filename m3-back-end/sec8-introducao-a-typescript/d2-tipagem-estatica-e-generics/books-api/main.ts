import BookModel, { Book } from './models/Book';

const main = async () => {
  const bookModel = new BookModel();
  const books = await bookModel.getAll();
  console.log(books);
};

main();
