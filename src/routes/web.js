const express = require('express');
const router = express.Router();
const pokemonList = require('../data/pokemonList');
const os = require('os');

router.get('/', (req, res) => {
  const index = Math.floor(Math.random() * pokemonList.length);
  const pokemon = pokemonList[index];

  res.send(`
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.image}" alt="${pokemon.name}" />
    <p>${pokemon.phrase}</p>
    <p>Container ID: ${os.hostname()}</p>
  `);
});

module.exports = router;