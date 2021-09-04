const { Recipe } = require('../models');

const RecipeData = [
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
