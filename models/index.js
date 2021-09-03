
const Food = require('./food');
const Recipe = require('./recipe');
const Dish = require('./dish')



Food.belongsToMany(Dish, {
    through: Recipe,
  foreignKey: 'food_id'
});

Dish.belongsToMany(Food, {
    through: Recipe,
    foreignKey: 'dish_id'
});




module.exports = {
  Food,
  Recipe,
  Dish,
};