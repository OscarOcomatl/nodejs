
const {http} = require('../plugins')


// Promesa con una mejor manera de ser implementada
const getPokemonById = async ( param ) => {
    var url = `https://pokeapi.co/api/v2/pokemon/`;

    if ( typeof param === 'string' )
        url = url+`${param}`;
        console.log('string ',url)
    if ( typeof param === 'number' )
        url = url+`${param}`;
        console.log(url)
    const pokemon = await http.get(url);
    return {
        name:pokemon.name,
        abilities:pokemon.abilities
    };
}

module.exports = getPokemonById
