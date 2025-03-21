
//adaptar el paquete de terceros
const getAgePlugin = require('get-age')


const getAge = (birthdate) => {
    // Nuestra logica para adaptar el codigo
    if( !birthdate ) return new Error('Birthdate is required')

    return getAgePlugin(birthdate)
} 

module.exports = {
    getAge
}

