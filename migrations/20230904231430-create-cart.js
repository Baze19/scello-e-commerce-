'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: { type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4 },
      name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      price: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE, defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE, defaultValue: DataTypes.NOW
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Carts');
  }
};