import Author from './database/models/Author.model';

(async () => {
  const authors = await Author.findAll({
    include: { model: Author, attributes: [] },
  });

  console.table(authors);
})();
