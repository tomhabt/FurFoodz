const router = require('express').Router();
const { Food, Recipe } = require('../../models')

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/dashboard', (req, res) => {
    Recipe.findAll({
        include: {
            model: Food,
            as: 'RecipesWithFood',
            through: {
                attributes: ['food_id']
            }
        }
    })
        .then(recipes => {
            
            //Once you have re-setup your db, run node, and view the dashboard to see these prints and how to access the obj:
            const tempFood = recipes[0].dataValues.RecipesWithFood[0].dataValues;
            console.log(tempFood.food_name, tempFood.serving, tempFood.calories);
            //

            res.render('dashboard', {
                recipes
            })
        })
})

router.get('/details', (req, res) => {
    res.render('details')
})

router.get('/create', (req, res) => {
    res.render('create')
})

module.exports = router;