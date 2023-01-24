const { Book } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const findAll = async () => {
  const books = await Book.findAll();
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
};

const update = async (book, id) => {
  const [updatedBook] = await Book.update(book, { where: { id } });
  return updatedBook;
};

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
};

const findByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author } });
  return books;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  findByAuthor,
};
