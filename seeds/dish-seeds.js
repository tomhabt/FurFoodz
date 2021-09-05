const { Dish } = require('../models');

const DishData = [
 {
    dish_name: 'Dogs Breakfast',
    description: 'Cheesy Scrambled Eggs with Potates Mushed in'
 },
 {
     dish_name: 'Bork Belly',
     decripton: ''
 },
 {   dish_name: 'Chimken Stir Fry',
    description: ''
},
 {  dish_name: 'Doggo Taco Bowl',
    description: ''
},
{
    dish_name: 'Smells Fishy',
    description: ''
},
]


  const seedDishes = () => Dish.bulkCreate(dish.Data);

  module.exports = seedDishes;
