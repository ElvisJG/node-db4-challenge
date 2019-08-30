const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  return db('ingredients as i')
    .innerJoin('recipes as r', 'i.recipe_id', 'r.id')
    .select('r.recipe_name', 'i.ingredient', 'i.quantity', 'i.measuring_unit')
    .where('i.recipe_id', id);
}

function getInstructions(id) {
  return db('instructions as in')
    .innerJoin('recipes as r', 'in.recipe_id', 'r.id')
    .select('r.recipe_name', 'in.steps')
    .where('in.recipe_id', id);
}
