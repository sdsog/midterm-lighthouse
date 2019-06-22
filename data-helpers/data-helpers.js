const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

const dataHelpers = {
  saveNewResource: function(newResource) {
    return knex("resources")
      .returning("id")
      .insert(newResource);
    // .then(result => {
    //   callback(null);
    // })
    // .catch(error => {
    //   console.log(error);
    //   callback(error);
    // });
  },

  resourcesForUser: function(user_id) {
   return knex
    .select("*")
    .from("resources")
    .where("user_id", user_id);
    // .then(result => {
    //   callback(null);
    // })
    // .catch(error => {
    //   console.log(error);
    //   callback(error);
    // });
  },

  renderResource: function(resourceId) {
    return knex
      .select("*")
      .from("resources")
      .where("id", resourceId)
      .first(10);
  },
};

module.exports = dataHelpers;
