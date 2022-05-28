const pokedexJson = require("../models/pokedex.json");
const express = require('express');
const { response } = require("../app");
const app = express()

app.use(express.json());

const getPokemons = (req, res) => {
    res.status(200).json([{
        "pokemons": pokedexJson
    }])
};

const updateStats = (req, res) => {
    const idRequest = req.params.id;
    let newStats = req.body.stats;

    filterStats = pokedexJson.filter(pokemon => pokemon.id == idRequest);

    filterStats.stats = newStats;

    res.status(200).json([{
        "message": "Stats pokemon alterado com sucesso",
        filterStats
    
    }])
};

const updatePokemon = (req,res) => {
    const idRequest = req.params.id;
    let pokemonRequest = req.body;

    let foundIndex = pokedexJson.findIndex(pokemon => pokemon.id == idRequest);

    pokedexJson.splice(foundIndex, 1, pokemonRequest);

    res.status(200).json([{
        "message": "Pokemon modificado",
        pokedexJson
    }])

};

const deleteById = (req, res) => {
    const idRequest = res.params.id;

    const indicePokemon = pokedexJson.findIndex(pokemon => pokemon.id == idRequest)

    pokedexJson.splice(indicePokemon, 1)

    res.status(200).json([{
        "message": "Pokemon deletado",
        "deletado": idRequest,
        pokedexJson
    }])

}

module.exports = {
    getPokemons,
    updateStats,
    updatePokemon,
    deleteById
}