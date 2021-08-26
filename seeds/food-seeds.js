const { Food } = require('../models');

const foodData = [
 {
    product_name: 'Ground Beef',
    serving: 100,
    calories: 332,
},
{
    product_name: 'Eggs',
    serving: 100,
    calories: 155,
},
{
    product_name: 'Boiled Potato',
    serving: 100,
    calories: 87,
}
]

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;