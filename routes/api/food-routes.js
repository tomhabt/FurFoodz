const router = require('express').Router();
const bodyParser = require('body-parser').json();
const { Food } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Food.findAll()
    .then(dbFood => res.json(dbFood))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Food.findOne({
    where: {
      food_id: req.params.id
    },
    attributes: ['food_id', 'food_name', 'serving', 'calories']
  })
    .then(dbFood => {
      if (!dbFood) {
        res.status(404).json({ message: 'No Food found with this id' });
        return;
      }
      res.json(dbFood);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', bodyParser, (req, res) => {
  Food.create({
    food_name: req.body.food_name,
    serving: req.body.serving,
    calories: req.body.calories
  })
    .then(dbFood => res.json(dbFood))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', bodyParser, (req, res) => {
  Food.update(req.body, {
    individualHooks: true,
    where: {
      food_id: req.params.id
    }
  })
    .then(dbFood => {
      if (!dbFood) {
        res.status(404).json({ message: 'No Food found with this id' });
        return;
      }

      res.json({ message: "Updated at given id" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Food.destroy({
    where: {
      food_id: req.params.id
    }
  })
    .then(dbFood => {
      if (!dbFood) {
        res.status(404).json({ message: 'No food found with this id' });
        return;
      }
      res.json(dbFood);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;