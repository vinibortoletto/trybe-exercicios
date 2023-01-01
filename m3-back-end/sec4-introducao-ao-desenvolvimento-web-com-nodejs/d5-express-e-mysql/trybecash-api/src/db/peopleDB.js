const { connection } = require('./connection');

const insert = (person) => {
  return connection.execute(
    `
    INSERT INTO people
      (first_name, last_name, email, phone)
    VALUES
      (?, ?, ?, ?)
  `,
    [person.firstName, person.lastName, person.email, person.phone]
  );
};

const findAll = () => connection.execute('SELECT * FROM people');

const findById = (id) => {
  return connection.execute('SELECT * FROM people WHERE id = ?', [id]);
};

const update = (person, id) => {
  return connection.execute(
    `
    UPDATE people
    SET first_name ?, last_name = ?, email = ?, phone = ?
    WHERE id = ?
  `,
    [person.firstName, person.lastName, person.email, person.phone, id]
  );
};

const remove = (id) => {
  return connection.execute('DELETE FROM people WHERE id = ?', [id]);
};

module.exports = { insert, findAll, findById, update, remove };
