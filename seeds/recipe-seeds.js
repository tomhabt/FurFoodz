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
food_id: 12
},
{
dish_id: 2,
food_id: 4
},
{
dish_id: 2,
food_id: 8
},
{
dish_id: 2,
food_id: 14
},
{ //chicken stir fry
dish_id: 3,
food_id: 10
},
{
dish_id: 3,
food_id: 9
},
{
dish_id: 3,
food_id: 16
},
{//dog taco bowl
dish_id: 4,
food_id: 1
},
{
dish_id: 4,
food_id: 12
},
{
dish_id: 4,
food_id: 16
},
{//fishy
dish_id: 5,
food_id: 7
},{
dish_id: 5,
food_id: 5
},
{
dish_id: 5,
food_id: 8
},
  ]

  const seedRecipes = () => Recipe.bulkCreate(recipe.Data);

  module.exports = seedRecipes;
