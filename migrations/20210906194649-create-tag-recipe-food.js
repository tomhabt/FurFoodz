'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TagRecipeFoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        refrences: {
          model: 'Recipe',
          key: 'recipe_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        unique: 'unique-food-per-recipe'
      },
      food_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        refrences: {
          model: 'Food',
          key: 'food_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        unique: 'unique-food-per-recipe'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TagRecipeFoods');
  }
};