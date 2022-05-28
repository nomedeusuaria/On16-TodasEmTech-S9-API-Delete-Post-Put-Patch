const express = require('express');

const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();

app.use(express.json());

app.use("/pokedex", pokemonRoutes);

module.exports = app