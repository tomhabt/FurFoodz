
const Food = require('./food');
const Recipe = require('./recipe');
const Make = require('./make');



Recipe.hasMany(Food, {
  foreignKey: 'recipe_id',
});


Food.belongsToMany(Recipe, {
  through: make,
  foreignKey: 'id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  food,
  
};