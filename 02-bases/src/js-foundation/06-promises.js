

// Promesa con una mejor manera de ser implementada
const getPokemonById = ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch( url ) // Se retorna una promesa
        .then( ( response ) => response.json()) // Al retornar una promesa dentro del then   // Permite poner otro then en cadena y ya se puede trabajar con la data
        // .then(() => { throw new Error('Pokemon no encontrado')})
        .then( ( pokemon ) => pokemon.name )
}



// // Promesa con una mejor manera de ser implementada
// const getPokemonById = ( id, callback ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch( url )
//         .then( ( response ) => response.json()) // Al retornar una promesa dentro del then   // Permite poner otro then en cadena y ya se puede trabajar con la data
//         .then( ( pokemon ) => callback( pokemon.name ))
// }



// //promesas
// const getPokemonById = ( id, callback ) => {

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
//     //Promesa
//     fetch( url ).then( (response) => {
//         response.json().then( (pokemon) => {
//             // console.log( pokemon.name );
//             // return pokemon.name;
//             callback( pokemon.name )
//         });
//     });
//     // fetch( url )
//     //     .then()//Cuando todo sale bien y la promesa se resuelve de manera exitosa
//     //     .catch()// Cuando algo sale mal
//     //     .finally()// Se ejecuta siempre y cuando se ejecute un then o un catch
// }

// module.exports = {} // Metodo 1 de exportar

// Metodo 2 de exportar
module.exports = getPokemonById;

