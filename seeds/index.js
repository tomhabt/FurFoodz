const seedRecipes = require('./recipe-seeds');
const seedFoods = require('./food-seeds');
const seedDish = require('./dish-seeds')


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedFoods();
  console.log('\n----- INGREDIENTS SEEDED -----\n');

  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');

  await seedDish();
  console.log('\n----- DISHES SEEDED -----\n');




  process.exit(0);
};

seedAll();