"use strict";

const express = require("express");
const router = express.Router();
const dataHelpers = require("../data-helpers/data-helpers");

module.exports = knex => {
  //GET All Resources
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then(results => {
        res.json(results);
      });
  });

  router.get

  router.get("/mine", (req, res) => {
    dataHelpers.resourcesForUser(req.session.user_id).then(results => {
      res.json(results);
    });
  });

  // GET Resource Detail Page
  router.get("/:id", (req, res) => {
    const resourceId = req.params.id;
    dataHelpers
      .renderResource(resourceId)
      .then(result => {
        console.log("resource found:", result);
        res.render("resource", result);
      })
      .catch(error => {
        res.status(404).send("resource not found");
      });
  });

  // POST New Resource
  router.post("/", (req, res) => {
    const newResource = {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
      user_id: req.session.user_id,
    };

    dataHelpers
      .saveNewResource(newResource)
      .then(id => {
        res.redirect("/");
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });

  return router;
};
