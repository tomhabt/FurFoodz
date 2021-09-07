const router = require('express').Router();
const { Recipe } = require('../../models')

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/dashboard', (req, res) => {
    Recipe.findAll()
        .then(recipes => {
            console.log(recipes)
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