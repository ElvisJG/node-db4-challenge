exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Shakshuka' },
        { recipe_name: 'Boiled Eggs' },
        { recipe_name: 'Peanut Butter and Jelly Sandwich' }
      ]);
    });
};
