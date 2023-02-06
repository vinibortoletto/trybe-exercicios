import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Author from './Author.model';

class Book extends Model {
  declare id: number;
  declare name: string;
}

Book.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },

    title: {
      allowNull: false,
      type: STRING(30),
    },

    authorId: {
      allowNull: false,
      type: INTEGER,
      references: {
        model: 'authors',
        key: 'id',
      },
    },

    genreId: {
      allowNull: false,
      type: INTEGER,
      references: {
        model: 'genres',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'books',
    timestamps: false,
    underscored: true,
  }
);

Book.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Book, { foreignKey: 'id' });

export default Book;
