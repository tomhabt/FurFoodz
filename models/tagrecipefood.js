'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagRecipeFood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TagRecipeFood.belongsTo(models.Recipe, { foreignKey: 'recipe_id', targetKey: 'recipe_id', as: 'Recipe' });
      TagRecipeFood.belongsTo(models.Food, { foreignKey: 'food_id', targetKey: 'food_id', as: 'Food' });
    }
  };
  TagRecipeFood.init({
    recipe_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TagRecipeFood',
  });
  return TagRecipeFood;
};