const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
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

        }

          },
    }
)

module.exports = food;