const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const foodRoutes = require('./food-routes.js');

const recipeRoutes = require('./recipe-routes.js')

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/recipe', recipeRoutes);

router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;
