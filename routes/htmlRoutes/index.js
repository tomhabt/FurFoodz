const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/homepage', (req, res) => {
    res.render('homepage')
})

module.exports = router;