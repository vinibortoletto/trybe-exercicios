import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },

    name: {
      allowNull: false,
      type: STRING(30),
    },
  },
  {
    sequelize: db,
    modelName: 'authors',
    timestamps: false,
  }
);

export default Author;
