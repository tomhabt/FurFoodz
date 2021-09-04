const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const foodRoutes = require('./food-routes.js');

const dishRoutes = require('./dish-routes.js')

router.use('/users', userRoutes);
router.use('/food', foodRoutes);

router.use('/dish', dishRoutes)

module.exports = router;
