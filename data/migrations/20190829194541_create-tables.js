exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('animals', tbl => {
      tbl.increments();
      tbl.string('animal_name', 128).notNullable();
    })
    .createTable('zoo_animals', tbl => {
      tbl
        .integer('zoo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('zoos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('animals')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['zoo_id', 'animal_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions');
};
