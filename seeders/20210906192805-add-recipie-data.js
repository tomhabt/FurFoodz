'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Recipes', [
      {
        recipe_name: 'Dogs Breakfast',
        description: 'Cheesy Scrambled Eggs with Potates Mushed in',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_name: 'Bork Belly',
        description: 'Not actual bark.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_name: 'Chimken Stir Fry',
        description: 'Chicken included',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_name: 'Doggo Taco Bowl',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipe_name: 'Smells Fishy',
        description: '',
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
          { recipe_name: 'Dogs Breakfast' },
          { recipe_name: 'Bork Belly' },
          { recipe_name: 'Chimken Stir Fry' },
          { recipe_name: 'Doggo Taco Bowl' },
          { recipe_name: 'Smells Fishy' }
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
