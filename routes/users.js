"use strict";

const express = require("express");
const router = express.Router();

module.exports = knex => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then(results => {
        res.json(results);
      });
  });

  router.post("/login", (req, res) => {
    const id = req.body.id;
    console.log(id);
    req.session.user_id = req.body.id;
    res.redirect("/");
  });

  //LOGOUT

  router.post("/logout", (req, res) => {
    res.clearCookie("user_id");
    res.clearCookie("user_id.sig");
    res.redirect("/");
  });

  return router;
};
