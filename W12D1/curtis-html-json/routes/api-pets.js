const express = require('express');
const asyncHandler = require('express-async-handler');
const { all } = require("../data/pet-data");
const router = express.Router();

/* Get users listing */
router.get('/', asyncHandler(async function(_, res) {
  const data = await all();
  res.json(data);
}));


router.get('/:id', asyncHandler(async function(req, res) {
  const data = await one(req.params.id);
  res.json(data);
}));

module.exports = router;
