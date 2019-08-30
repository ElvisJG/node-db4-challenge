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

module.exports = router;
