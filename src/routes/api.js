const express = require('express');
const router = express.Router();
const pokemonList = require('../data/pokeneas');
const os = require('os');

router.get('/', (req, res) => {
  const index = Math.floor(Math.random() * pokemonList.length);
  const pokemon = pokemonList[index];

  res.json({
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    ability: pokemon.ability,
    containerId: os.hostname()
  });
});

module.exports = router;