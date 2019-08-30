exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'Olive Oil', quantity: '3', measuring_unit: 'tbsp' },
        { ingredient: 'Onion', quantity: '1', measuring_unit: 'large' },
        {
          ingredient: 'Red Bell Peper',
          quantity: '1',
          measuring_unit: 'large'
        },
        { ingredient: 'Garlic', quantity: '2', measuring_unit: 'oz' },
        { ingredient: 'Cumin', quantity: '1', measuring_unit: 'tsp' },
        { ingredient: 'Sweet Paprika', quantity: '1', measuring_unit: 'tsp' },
        { ingredient: 'Cayenne', quantity: '0.5', measuring_unit: 'tsp' },
        {
          ingredient: 'Can of whole plum tomatoes',
          quantity: '28',
          measuring_unit: 'oz'
        },
        { ingredient: 'Salt', quantity: '0.75', measuring_unit: 'tsp' },
        { ingredient: 'Black Pepper', quantity: '0.25', measuring_unit: 'tsp' },
        { ingredient: 'Feta Cheese', quantity: '5', measuring_unit: 'oz' },
        { ingredient: 'Eggs', quantity: '6', measuring_unit: 'large' },
        { ingredient: 'Cilantro', quantity: '2', measuring_unit: 'pinch' },
        { ingredient: 'Bread', quantity: '2', measuring_unit: 'slices' },
        { ingredient: 'Peanut Butter', quantity: '1', measuring_unit: 'tbsp' },
        { ingredient: 'Jelly', quantity: '0.5', measuring_unit: 'tbsp' }
      ]);
    });
};
