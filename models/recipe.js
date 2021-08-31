const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
         
          },
        }
)

module.exports = recipe;