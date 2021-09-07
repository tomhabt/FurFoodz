'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Food', [
      {
        food_name: 'Ground Beef',
        serving: 100,
        calories: 332,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_name: 'Eggs',
        serving: 100,
        calories: 155,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_name: 'Boiled Potato',
        serving: 100,
        calories: 87,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //4
        food_name: 'Lean Pork (Chop/Loin)',
        serving: 100,
        calories: 231,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //5
        food_name: 'Carrot (Steamed/Boiled)',
        serving: 50,
        calories: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {//6
        food_name: 'Broccoli (Steamed/Boiled)',
        serving: 50,
        calories: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //7
        food_name: "Salmon",
        serving: 100,
        calories: 208,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //8
        food_name: "Brown Rice",
        serving: 100,
        calories: 112,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //9
        food_name: "White Rice",
        serving: 100,
        calories: 130,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //10
        food_name: "Chicken (Breast)",
        serving: 100,
        calories: 165,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //11
        food_name: "Chicken (Leg/Thigh)",
        serving: 100,
        calories: 178,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //12
        food_name: "Cheddar Cheese",
        serving: 50,
        calories: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //13
        food_name: "Mozzarella Cheese",
        serving: 50,
        calories: 166,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //14
        food_name: "Sweet Potato",
        serving: 100,
        calories: 86,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //15
        food_name: "Turkey Breast",
        serving: 100,
        calories: 189,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {   //16
        food_name: "Green Beans (Boiled/Steamed)",
        serving: 50,
        calories: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Food', {
      [Op.or]:
        [
          { food_name: 'Ground Beef' },
          { food_name: 'Eggs' },
          { food_name: 'Boild Potato' },
          { food_name: 'Lean Pork (Chop/Loin)' },
          { food_name: 'Carrot (Steamed/Boiled' },
          { food_name: 'Broccoli (Steamed/Boiled)' },
          { food_name: 'Salmon' },
          { food_name: 'Brown Rice' },
          { food_name: 'White Rice' },
          { food_name: 'Chicken (Breast)' },
          { food_name: 'Chicken (Leg/Thigh)' },
          { food_name: 'Cheddar Cheese' },
          { food_name: 'Mozzarella Cheese' },
          { food_name: 'Sweet Potato' },
          { food_name: 'Turkey Breast' },
          { food_name: 'Green Beans (Boiled/Steamed)' },
        ]
    });
  }
};

/**
 * up
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    **/

/**
 * down
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */