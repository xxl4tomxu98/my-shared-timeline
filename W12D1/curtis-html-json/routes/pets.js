const express = require("express");
const asyncHandler = require("express-async-handler");

const { all } = require("../data/pet-data");

const router = express.Router();

/* Get user listing */

router.get('/', asyncHandler(async function(_, res) {
  const data = await all();
  res.render('pets/index', { pets: data })
}));

//get pet/id listing

router.get('/:id', asyncHandler(async function(req, res) {
  const pet = await one(req.params.id);
  res.render('pets/detail', { pet });
}));

module.exports = router;
