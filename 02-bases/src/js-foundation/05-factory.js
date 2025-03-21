// un factory es una funcion que crea una funcion

// renombrar en lugar de usar v4, se usará uuidv4
// const {v4: uuidv4} = require('uuid')// Usando patron adaptador

// const {getUuid: getUUID} = require('../plugins/get-id.plugin')

// uso de get-age
// const getAge = require('get-age') // Para hacer uso del patron adaptador ya no importariamos del paquete de terceros sino de nuestro codigo adaptado
// const {getAge} = require('../plugins/get-age.pugin') 
// al hacer el objeto = require()... solo se obtiene el objeto, hay que desestructurar para obtener lo que se va a necesitar de ese objeto haciendo {objeto}

// const {getAge, getUUID} = require('../plugins/index')

// const obj = {
//     name:'Tony',
//     birthdate:'2000-07-12'
// }

// const obj2 = {
//     name:'Oscar',
//     birthdate:'2003-02-24'
// }

// factory function es una funcion que regresa una funcion
const buildMakePerson = ({getUUID, getAge}) => {
    // Funcion tradicional que regresa un objeto
    return ( {name, birthdate} ) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}


module.exports = {
    buildMakePerson
}

// const john = buildPerson( obj );
// const mil = buildPerson( obj2 );
// console.log('Persona: ',john)
// console.log('Persona: ',mil)

// // Funcion tradicional que regresa un objeto
// const buildPerson = ( {name, birthdate} ) => {
//     return {
//         id: new Date().getTime(),
//         name: name,
//         birthdate: birthdate,
//         age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
//     }
// };
