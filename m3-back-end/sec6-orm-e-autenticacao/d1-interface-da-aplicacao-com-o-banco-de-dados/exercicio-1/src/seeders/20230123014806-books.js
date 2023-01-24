'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Dune',
          author: 'Frank Herbert',
          pageQuantity: '701',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Dune Messiah',
          author: 'Frank Herbert',
          pageQuantity: '433',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Booksj', null, {}),
};
