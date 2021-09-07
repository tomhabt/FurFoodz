'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsToMany(models.Food, { as: 'FoodInRecipe', through: models.TagRecipeFood, foreignKey: 'id' });
    }
  };
  Recipe.init({
    recipe_name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};