

// console.log( process.env );
const {SHELL, ProgramData, COLOR} = process.env; //Desestructuracion
// console.log( {SHELL, ProgramData, COLOR} );
// console.table( {SHELL, ProgramData, COLOR} );

const characters = [ 'Flash', 'Superman','Batman' ];// Desestructuracion de arreglos

// Esta sintaxis son nombres validos porque si se quiere 
// una desestructuracion en especial, no hace falta nombrar
// las posiciones de otros objetos
const [ _,__,batman ] = characters;

