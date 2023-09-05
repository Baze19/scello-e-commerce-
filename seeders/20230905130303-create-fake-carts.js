'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('carts', [{
        uuid:"ef51dd1e-34cf-4278-8b6c-9f75ec0c28af",
        name: 'kettle',
        price: 100,
        createdAt:"1970-01-01 08:00:00",
        updatedAt:"1970-01-01 08:00:00"
      },
      {
        uuid:"ef51dd1e-34cf-4278-8b6c-9f75ec0c2666",
        name: 'socks',
        price: 50,
        createdAt:"1970-01-01 08:00:00",
        updatedAt:"1970-01-01 08:00:00"
      },
      {
        uuid:"ef51dd1e-34cf-4278-8ujc-9f75ec9928af",
        name: 'towel',
        price: 80,
        createdAt:"1970-01-01 08:00:00",
        updatedAt:"1970-01-01 08:00:00"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('carts', null, {});
  }
};
