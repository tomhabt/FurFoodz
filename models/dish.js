const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Dish extends Model {}

Dish.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          dish_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 60],
            },
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 260],
            },
          },
        
     },
     {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'dish',
    }
  
    
)

module.exports = dish;