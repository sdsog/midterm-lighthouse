const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

const dataHelpers = {
  saveNewResource: function(newResource, callback) {
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

  renderResource: function(resourceId) {
    return knex
      .select("*")
      .from("resources")
      .where("id", resourceId)
      .first(10);
  },
};

module.exports = dataHelpers;
