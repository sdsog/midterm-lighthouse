exports.up = function(knex, Promise) {
  return Promise.all([

    // CREATE USERS TABLE
    knex.schema.createTable('users', function(table){
      table.increments('id').primary();
      table.string('username');
      table.string('email');
      table.string('password');
      table.date('date_created');

    }),
    knex.schema.createTable('collections', function(table){
      table.increments('id').primary();
      table.string('name');
      table.boolean('saved');
      table.foreign('user_id').references('id').inTable('users');

    }),
    knex.schema.createTable('resources', function(table){
      table.increments('id').primary();
      table.string('url');
      table.string('title');
      table.string('description');
      table.string('favicon');
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('collection_id').references('id').inTable('collections');
    }),
    knex.schema.createTable('engagements', function(table){
      table.increments('id').primary();
      table.string('comments');
      table.integer('rating');
      table.boolean('liked');
      table.foreign('resource_id').references('id').inTable('resources');
      table.foreign('user_id').references('id').inTable('users');
    }),
    knex.schema.createTable('categories', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.foreign('resource_id').references('id').inTable('resources');
    }),
    knex.schema.createTable('joinTable', function(table){
      table.foreign('collection_id').references('id').inTable('collections');
      table.foreign('user_id').references('id').inTable('users');
    })

  ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all ([
      knex.schema.dropTable('users'),
      knex.schema.dropTable('collections'),
      knex.schema.dropTable('resources'),
      knex.schema.dropTable('engagements'),
      knex.schema.dropTable('categories'),
      knex.schema.dropTable('joinTable'),

    ])

  };
