const userSeeds = require('../seed-data/users-seed.js');
const collectionSeeds = require('../seed-data/collections-seed.js');
const resourceSeeds = require('../seed-data/resources-seed.js');
const engagementSeeds = require('../seed-data/engagements-seed.js');
const categorySeeds = require('../seed-data/categories-seed.js');
const joinTableSeeds = require('../seed-data/user-collection-resources-seed.js');





exports.seed = function (knex, Promise) {
  return knex('users').del()

    .then(function () {
      return knex('collections').del()
    })
    .then(function () {
      return knex('resources').del()
    })
    .then(function () {
      return knex('engagements').del()
    })
    .then(function () {
      return knex('categories').del()
    })
    .then(function () {
      return knex('joinTable').del()
    })
    .then(function () {
      return knex('users').insert(userSeeds)
    })
    .then(function () {
      return knex('collections').insert(collectionSeeds)
    })
    .then(function () {
      return knex('resources').insert(resourceSeeds)
    })
    .then(function () {
      return knex('engagements').insert(engagementSeeds)
    })
    .then(function () {
      return knex('categories').insert(categorySeeds)
    })
    .then(function () {
      return knex('joinTable').insert(joinTableSeeds)
    })

};





