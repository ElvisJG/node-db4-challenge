const express = require('express');

const Data = require('./helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Data.getRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  Data.getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Failed to get the shopping list(${id})` });
    });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;
  Data.getInstructions(id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get the steps for (${id})` });
    });
});

module.exports = router;
