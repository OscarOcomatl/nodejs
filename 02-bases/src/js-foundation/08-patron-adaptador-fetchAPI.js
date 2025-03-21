
const {http} = require('../plugins')


// Promesa con una mejor manera de ser implementada
const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await http.get(url);


    return pokemon.name;
}

module.exports = getPokemonById
