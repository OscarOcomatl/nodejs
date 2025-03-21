// const {getUUID, getAge} = require('./plugins')
// const templateExports = require('./js-foundation/01-template') //requerir archivos de otros lugares
// const template = templateExports.emailTemplate
// const { emailTemplate } = require('./js-foundation/01-template') // Desestructuracion
// require('./js-foundation/02-desestructuring')// se esta ejecutando la funcion con el uso del require
// const { getUsersById } = require('./js-foundation/03-callbacks')
// const { getUsersById2 } = require('./js-foundation/04-arrow')

// Factory functions
// const { buildMakePerson } = require('./js-foundation/05-factory')
                                      //Inyeccion de dependencias
// const makePerson = buildMakePerson({getUUID, getAge});
// const obj = { name:'Tony', birthdate:'2000-07-12'}
// const john = makePerson( obj )
// console.log({john})

// // Promises
// const getPokemonById = require('./js-foundation/06-promises')
// // console.log(getPokemonById(2))
// // getPokemonById( 4, ( pokemon) => {
// //     console.log({ pokemon })
// // })
// const info = getPokemonById( 4 )
//     .then((pokemon) => console.log( {pokemon} ))
//     .catch((err) => console.log('Porfavor intenta de nuevo'))
//     .finally( () => console.log('Finalmente'))


// // Async - await
const getPokemonById = require('./js-foundation/07-async-await')
getPokemonById( 4 )
    .then((pokemon) => console.log( {pokemon} ))
    .catch((err) => console.log(err))
    .finally( () => console.log('Finalmente'))


// const id = 1

// getUsersById2( id, ( error,user ) => {
//     if(error) {
//         throw new Error( error )
//     }
//     console.log( user )
// });


