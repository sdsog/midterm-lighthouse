"use strict";

const express = require("express");
const router = express.Router();
const dataHelpers = require("../data-helpers/data-helpers");

module.exports = knex => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then(results => {
        res.json(results);
      });
  });

  router.post("/resources", (req, res) => {
    // const newTitle = req.body.title;

    const newResource = {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
      user_id: req.session.user_id,
    };

    dataHelpers.saveNewResource(newResource, err => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201);
        res.redirect("/");
      }

      // url: req.body.url,
      // description: req.body.description,

      console.log("NEW", newResource);
      // knex("resources")
      // .into({ title: title, url: url, description: description })
      // .then(results => {
      //   res.json(results);
      // });
    });
  });

  return router;
};
