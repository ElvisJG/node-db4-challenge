exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, steps: 'Heat over to 375' },
        { recipe_id: 1, steps: 'Heat Oil in a large pan' },
        { recipe_id: 1, steps: 'Sautee onion and pepper' },
        { recipe_id: 1, steps: 'Cook gently until soft, about 20 minutes' },
        { recipe_id: 1, steps: 'Add garlic and cook for 2 more minutes' },
        {
          recipe_id: 1,
          steps: 'Stir in cumin, paprika, cayenne, and cook for 1 minute'
        },
        {
          recipe_id: 1,
          steps:
            'Pour in tomatoes and season with salt and pepper, simmer for 10 minutes'
        },
        { recipe_id: 1, steps: 'Stir in feta cheese' },
        {
          recipe_id: 1,
          steps:
            'Gently crack the eggs into the skillet over our delicious concoction'
        },
        {
          recipe_id: 1,
          steps:
            'Transfer skillet to an oven and bake until eggs are JUST set, 7 to 10 minutes'
        },
        { recipe_id: 1, steps: 'Sprinkle cilantro and serve! bon appetit' },
        { recipe_id: 2, steps: 'boil egg in hot h2o' },
        {
          recipe_id: 3,
          steps:
            'spread both spreadable ingredients on bread, toasting optional'
        }
      ]);
    });
};
