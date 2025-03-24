'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('agents', [{
      name: 'Jane Doe',
      cpf: '12345678901',
      age: 30,
      email: 'janedoe@example.com',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'John Smith',
      cpf: '10987654321',
      age: 40,
      email: 'johnsmith@example.com',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('agents', null, {});
  }
};
