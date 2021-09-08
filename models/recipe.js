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
      Recipe.belongsToMany(models.Food, { as: 'RecipesWithFood', through: models.TagRecipeFood, foreignKey: 'recipe_id' });
    }
  };
  Recipe.init({
    recipe_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    recipe_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};