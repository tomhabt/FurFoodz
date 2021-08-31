const router = require('express').Router();
const { User, Food } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Food.findAll(
        {attributes: ['id', 'food_url', 'title', 'created_at'],
        order: [['created_at', 'DESC']], 
        include: [
            {
              model: User,
              attributes: ['username']
            }
          ]    
    })
      .then(dbFoodData => res.json(dbFoodData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Food.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'food_url', 'title', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbFoodData => {
        if (!dbFoodData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbFoodData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    // expects {title: 'Your reciepe goes viral!', food_url: 'https://......', user_id: 1}
    Food.create({
      title: req.body.title,
      food_url: req.body.post_url,
      user_id: req.body.user_id
    })
      .then(dbFoodData => res.json(dbFoodData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    Food.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbFoodData => {
        if (!dbFoodData) {
          res.status(404).json({ message: 'No reciepe found with this id' });
          return;
        }
        res.json(dbFoodData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    Food.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbFoodData => {
        if (!dbFoodData) {
          res.status(404).json({ message: 'No reciepe found with this id' });
          return;
        }
        res.json(dbFoodData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  
  
  module.exports = router;