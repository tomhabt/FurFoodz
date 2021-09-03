const { Recipe } = require('../models');

const recipeData = [
 {
    dish_id: 1,
    food_id: 2
},
{
    dish_id: 1,
    food_id: 3
},
{
dish_id: 1,
food_id: 14
},
  ]

  const seedRecipes = () => Recipe.bulkCreate(recipe.Data);

  module.exports = seedRecipes;
