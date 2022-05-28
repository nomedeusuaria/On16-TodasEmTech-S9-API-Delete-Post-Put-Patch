const controller = require('../controller/pokemonController');
const express = require('express');
const router = express.Router();

router.get("/pokemons", controller.getPokemons);

module.exports = router