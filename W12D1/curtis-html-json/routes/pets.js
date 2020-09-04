const express = require("express");
const asyncHandler = require("express-async-handler");
const { Pet, PetType, Owner} = require("../models");
const router = express.Router();

/* Get user listing */

router.get('/', asyncHandler(async function(_, res) {
  const pets = await Pet.findAll({
    order: ['name'],
    include: [owner]
  });
  const data = pets.map(pet => ({
    id: pet.id,
    name: pet.name,
    numberOfOwners: pet.Owners.length
  }));
  res.render('pets/index', { pets: data })
}));

//get pet/id listing

router.get('/:id', asyncHandler(async function(req, res) {
  const pet = await Pet.findByPk(req.params.id, {
    include: [Owner, PetType]
  });
  res.render('pets/detail', { pet });
}));

module.exports = router;
