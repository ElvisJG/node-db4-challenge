exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredient: 'Olive Oil',
          quantity: '3',
          measuring_unit: 'tbsp',
          recipe_id: 1
        },
        {
          ingredient: 'Onion',
          quantity: '1',
          measuring_unit: 'large',
          recipe_id: 1
        },
        {
          ingredient: 'Red Bell Peper',
          quantity: '1',
          measuring_unit: 'large',
          recipe_id: 1
        },
        {
          ingredient: 'Garlic',
          quantity: '2',
          measuring_unit: 'oz',
          recipe_id: 1
        },
        {
          ingredient: 'Cumin',
          quantity: '1',
          measuring_unit: 'tsp',
          recipe_id: 1
        },
        {
          ingredient: 'Sweet Paprika',
          quantity: '1',
          measuring_unit: 'tsp',
          recipe_id: 1
        },
        {
          ingredient: 'Cayenne',
          quantity: '0.5',
          measuring_unit: 'tsp',
          recipe_id: 1
        },
        {
          ingredient: 'Can of whole plum tomatoes',
          quantity: '28',
          measuring_unit: 'oz',
          recipe_id: 1
        },
        {
          ingredient: 'Salt',
          quantity: '0.75',
          measuring_unit: 'tsp',
          recipe_id: 1
        },
        {
          ingredient: 'Black Pepper',
          quantity: '0.25',
          measuring_unit: 'tsp',
          recipe_id: 1
        },
        {
          ingredient: 'Feta Cheese',
          quantity: '5',
          measuring_unit: 'oz',
          recipe_id: 1
        },
        {
          ingredient: 'Eggs',
          quantity: '6',
          measuring_unit: 'large',
          recipe_id: 1
        },
        {
          ingredient: 'Cilantro',
          quantity: '2',
          measuring_unit: 'pinch',
          recipe_id: 1
        },
        {
          ingredient: 'Bread',
          quantity: '2',
          measuring_unit: 'slices',
          recipe_id: 3
        },
        {
          ingredient: 'Eggs',
          quantity: '2',
          measuring_unit: 'large',
          recipe_id: 2
        },
        {
          ingredient: 'Peanut Butter',
          quantity: '1',
          measuring_unit: 'tbsp',
          recipe_id: 3
        },
        {
          ingredient: 'Jelly',
          quantity: '0.5',
          measuring_unit: 'tbsp',
          recipe_id: 3
        }
      ]);
    });
};
