const seedFoods = require('./food-seeds');
const seedRecipes = require('./recipe-seeds');
const seedMake = require('./make-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedFoods();
  console.log('\n----- Foods SEEDED -----\n');

  await seedRecipes();
  console.log('\n----- Recipes SEEDED -----\n');

  await seedMake();
  console.log('\n----- HOW to MAke SEEDED -----\n');


  process.exit(0);
};

seedAll();