const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

const dataHelpers = {
  saveNewResource: function(newResource, callback) {
    console.log(newResource);
    knex("resources")
      .insert(newResource)
      .then(result => {
        callback(null);
      })
      .catch(error => {
        console.log(error);
        callback(error);
      });
  },
};

module.exports = dataHelpers;
