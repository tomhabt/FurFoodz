'use strict';

const recipe = require("../models/recipe");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('TagRecipeFoods', [
      {
        //id: n++,
        recipe_id: 1,
        food_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 1,
        food_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 1,
        food_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 2,
        food_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 2,
        food_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 2,
        food_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { //chicken stir fry
        recipe_id: 3,
        food_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 3,
        food_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 3,
        food_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {//dog taco bowl
        recipe_id: 4,
        food_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 4,
        food_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 4,
        food_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {//fishy
        recipe_id: 5,
        food_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        recipe_id: 5,
        food_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_id: 5,
        food_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Food', {
      [Op.or]:
        [
          { recipe_id: 1 },
          { recipe_id: 2 },
          { recipe_id: 3 },
          { recipe_id: 4 },
          { recipe_id: 5 }
        ]
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
