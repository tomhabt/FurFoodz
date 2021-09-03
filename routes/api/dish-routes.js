  
const router = require('express').Router();
const { Dish, Food, Recipe } = require('../../models');

// The `/api/dish` endpoint

router.get('/', (req, res) => {
  // find all dishes

  Dish.findAll({
    include: {
      model: Food,
      attributes: ['food_name', 'serving', 'calories']
    }
  })
    .then(dbDishData => res.json(dbDishData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single dish by its `id`
  // include its associated food data
  Dish.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Food,
      attributes: ['food_name', 'serving', 'calories']
    }
  })
    .then(dbDishData => res.json(dbDishData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Dish.create({
    dish_name: req.body.dish_name
  })
    .then(dbDishData => res.json(dbDishData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a dish's name by its `id` value
  Dish.update(req.body, {
    where: 
    {
      id: req.params.id
    }
    
  })
    .then(dbDishData => {
      if (!dbDishData){
        res.status(404).json({message:'This Dish ID was not found'});
        return;
      }
      res.json(dbDishData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Dish.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDishData => {
    if (!dbDishData) {
      res.status(404).json({message: 'This Dish ID was not found'});
      return;
    }
    res.json(dbDishData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;