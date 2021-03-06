"use strict";

const express = require("express");
const router = express.Router();
const dataHelpers = require("../data-helpers/data-helpers");

module.exports = knex => {
  //POST New Rating
  router.post("/rating", (req, res) => {
    const newRating = {
      rating: req.body.rate,
      user_id: req.session.user_id,
      resource_id: req.body.resourceid
    };
    console.log(newRating);
    dataHelpers.saveRating(newRating).then(result => {
      res.send(result);
    });
  });

  //POST New Comment
  router.post("/comment", (req, res) => {
    const newComment = {
      comment: req.body.comment,
      user_id: req.session.user_id,
      resource_id: req.body.resourceid
    };
    console.log(newComment);
    dataHelpers.saveComment(newComment).then(result => {
      res.send(result);
    });
  });
  return router;
};
