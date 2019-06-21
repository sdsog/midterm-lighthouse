exports.up = function (knex, Promise) {

  // CREATE USERS TABLE

  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('username');
    table.string('email');
    table.string('password');
    table.date('date_created');

  }).then(() => {
    return Promise.all([
      knex.schema.createTable('collections', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.boolean('saved');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('users');

      }),
      knex.schema.createTable('resources', function (table) {
        table.increments('id').primary();
        table.string('url');
        table.string('title');
        table.string('description');
        table.string('favicon');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('users');
        table.integer('collection_id')
        table.foreign('collection_id').references('id').inTable('collections');
      }),
      knex.schema.createTable('engagements', function (table) {
        table.increments('id').primary();
        table.string('comment');
        table.integer('rating');
        table.boolean('liked');
        table.integer('resource_id')
        table.foreign('resource_id').references('id').inTable('resources');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('users');
      }),
      knex.schema.createTable('categories', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('resource_id')
        table.foreign('resource_id').references('id').inTable('resources');
      }),
      knex.schema.createTable('joinTable', function (table) {
        table.integer('collection_id')
        table.foreign('collection_id').references('id').inTable('collections');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('users');
      })

    ])
  });
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('collections'),
    knex.schema.dropTable('resources'),
    knex.schema.dropTable('engagements'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('joinTable'),

  ])

};
