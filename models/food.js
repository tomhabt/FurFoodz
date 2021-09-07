'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.belongsToMany(models.Recipe, {as: 'RecipesWithFood', through: models.TagRecipeFood, foreignKey: 'id'});
    }
  };
  Food.init({
    food_name: DataTypes.STRING,
    serving: DataTypes.INTEGER,
    calories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};