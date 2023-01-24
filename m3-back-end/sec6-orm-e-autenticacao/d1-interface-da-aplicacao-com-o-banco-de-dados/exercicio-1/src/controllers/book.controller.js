const BookService = require('../services/book.service');

const ERROR_MESSAGE = { message: 'Something went wrong! Try again.' };

const catchError = (error) => {
  console.log(error.message);
  return res.status(500).json(ERROR_MESSAGE);
};

const findAll = async (_req, res) => {
  const { author } = req.query;

  try {
    let books;

    if (author) {
      books = await BookService.findAll();
    } else {
      books = await BookService.findByAuthor();
    }

    return res.status(200).json(books);
  } catch (error) {
    return catchError(error);
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return catchError(error);
  }
};

const create = async (req, res) => {
  try {
    const newBook = await BookService.create(req.body);
    return res.status(200).json(newBook);
  } catch (error) {
    return catchError(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  try {
    const updatedBook = await BookService.update(book, id);
    return res.status(200).json(updatedBook);
  } catch (error) {
    return catchError(error);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.remove(id);
    return res.status(200).json(book);
  } catch (error) {
    return catchError(error);
  }
};

const findByAuthor = async (req, res) => {
  const { author } = req.query;

  try {
    let books;

    if (author) {
      books = await BookService.findByAuthor(author);
    } else {
      books = await BookService.findAll();
    }

    return res.status(200).json(books);
  } catch (error) {
    return catchError(error);
  }
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  findByAuthor,
};
