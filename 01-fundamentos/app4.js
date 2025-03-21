

console.log('Inicio de programa');// 1

setTimeout( () => { // Funcion que recibe una funcion (callback) y el callback es una funcion que se manda como argumento a otra funcion
    console.log('Primer Timeout'); 
}, 3000 );// Tiempo que se quiere esperar para que se ejecute el callback


setTimeout( () => {
    console.log('Segundo Timeout');
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');

