const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Recipe extends Model {}

Recipe.init(
    {
        recipe_id: {
            type: DataTypes.INTEGER
          },
          recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 60],
            },
            food_id:{
              type: DataTypes.INTEGER,
            // reference the food model's id 
            references: {
              model: 'Food',
              key: 'id'
            }
          },
          dish_id: {
            type: DataTypes.INTEGER,
            // reference the dish model's id 
            references: {
              model: 'Dish',
              key: 'id'
            }
          },
    }
)

module.exports = recipe;