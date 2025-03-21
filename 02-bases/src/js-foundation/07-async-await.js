

// Promesa con una mejor manera de ser implementada
const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    // await es codigo bloqueante, por lo que no se va ajecutar las siguientes lineas hasta que se resuelva el fetch
    const response = await fetch( url );

    // data
    const pokemon = await response.json()

    // throw new Error(' Pokemon no existe')

    return pokemon.name;
}

module.exports = getPokemonById


