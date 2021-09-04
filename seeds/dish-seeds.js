const { Dish } = require('../models');

const DishData = [
 {
    dish_name: 'Dogs Breakfast',
    description: 'Cheesy Scrambled Eggs with Potates Mushed in'
 },
]


  const seedDishes = () => Dish.bulkCreate(dish.Data);

  module.exports = seedDishes;
