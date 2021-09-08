
const router = require('express').Router();
const bodyParser = require('body-parser').json();
const { Food, Recipe } = require('../../models');

// The `/api/dish` endpoint

router.get('/', (req, res) => {
  // find all dishes
  Recipe.findAll()
    .then(dbFood => res.json(dbFood))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single dish by its `id`
  // include its associated food data
  Recipe.findOne({
    where: {
      recipe_id: req.params.id
    },
     include: {
       model: Food,
       as: 'RecipesWithFood',
       through: {
         attributes: ['food_id']
       }
    }
  })
    .then(dbFood => {
      if (!dbFood) {
        res.status(404).json({ message: 'No Recipe found with this id' });
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
  // create a new tag
  Recipe.create({
    recipe_name: req.body.recipe_name,
    description: req.body.description
  })
    .then(dbFood => {
      if (!dbFood) {
        res.status(404).json({ message: 'No Recipe found with this id' });
        return;
      }
      res.json(dbFood);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', bodyParser, (req, res) => {
  Recipe.update(req.body, {
    individualHooks: true,
    where: {
      recipe_id: req.params.id
    }
  })
    .then(dbFood => {
      if (!dbFood) {
        res.status(404).json({ message: 'No Recipe found with this id' });
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
  // delete on tag by its `id` value
  Recipe.destroy({
    where: {
      recipe_id: req.params.id
    }
  })
    .then(dbRecipe => {
      if (!dbRecipe) {
        res.status(404).json({ message: 'This Recipe ID was not found' });
        return;
      }
      res.json(dbRecipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;