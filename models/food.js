const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

          food_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 40],
            },

        serving: {
            //in grams
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Food',
    }
)

module.exports = food;