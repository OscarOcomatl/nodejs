// Node nos proporciona paquetes precargados
// como el de file system
const fs = require('fs')

// Ejecutar codigo bloqueante
const data = fs.readFileSync('README.md','utf8')

//  Expresion regular para reemplazar las palabras
const newData = data.replace(/React/ig, 'Angular')

// Crear un nuevo archivo evitando codigo bloqueante
fs.writeFileSync('README-Angular.md',newData)

// console.log(newData)

