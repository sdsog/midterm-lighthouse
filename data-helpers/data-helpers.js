const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

const dataHelpers = {
  saveNewResource: function(newResource) {
    return knex("resources")
      .returning("id")
      .insert(newResource);
  },

  resourcesForUser: function(user_id) {
    return knex
      .select("*")
      .from("resources")
      .where("user_id", user_id);
  },

  renderResource: function(resourceId) {
    return knex
      .select("*")
      .from("resources")
      .where("id", resourceId)
      .first(10);
  },

  saveRating: function(newRating) {
    return knex("engagements").insert(newRating);
  },

  saveComment: function(newComment) {
    return knex("engagements").insert(newComment);
  }
};

module.exports = dataHelpers;
