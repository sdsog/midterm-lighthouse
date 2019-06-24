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
    return knex("engagements")
      .returning(["id", "rating"])
      .insert(newRating);
  },

  saveComment: function(newComment) {
    return knex("engagements")
      .returning(["id", "comment"])
      .insert(newComment);
  },

  searchResources: function(searchData) {
    console.log(searchData);
    return Promise.all(
      searchData.map(queryTerm => {
        return knex
          .select("*")
          .from("resources")
          .whereRaw(`LOWER(title) like LOWER('%${queryTerm}%')`)
          .orWhereRaw(`LOWER(description) like LOWER('%${queryTerm}%')`)
          .orWhereRaw(`LOWER(url) like LOWER('%${queryTerm}%')`)
          .then(result => {
            console.log("data-helper", result);
            return result;
          });
      })
    );
  }
};

module.exports = dataHelpers;
