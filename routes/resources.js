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

  // router.get('/resource', (req, res) => {
  // 	res.render('resource', { id: req.session.user_id });
  // });

  // GET COMMENTS AND LOADS ON
  router.get("/:id/comments", (req, res) => {
    let id = parseInt(req.params.id);

    knex
      .select("*")
      .from("engagements")
      .where("resource_id", id)
      .then(result => {
        res.json(result);
      });
  });

  router.get("/mine", (req, res) => {
    dataHelpers.resourcesForUser(req.session.user_id).then(results => {
      res.json(results);
    });
  });

  // GET Search Query
  router.get("/search", (req, res) => {
    let searchData = req.query.query;
    searchData = searchData.split(" ");

    dataHelpers
      .searchResources(searchData)
      .then(output => {
        res.send(output);
      })
      .catch(error => {
        res.json(error);
        // res.status(404).send("resource not found");
      });
  });

  // GET Resource Detail Page
  router.get("/:id", (req, res) => {
    const id = req.session.user_id;
    const resourceId = req.params.id;
    dataHelpers
      .renderResource(resourceId)
      .then(result => {
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
      favicon: "https://source.unsplash.com/random/600x600"
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
