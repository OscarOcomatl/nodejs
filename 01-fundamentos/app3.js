// Node nos proporciona paquetes precargados
// como el de file system
const fs = require('fs');

// Ejecutar codigo bloqueante
const content = fs.readFileSync('README.md','utf8')

const words = content.split(' ')
const reactwords = words.filter(word => word.toLowerCase() === 'react').length
const includereactword = words.filter(word => word.toLocaleLowerCase().includes('react')).length //toLowerCase -> case sensitive

//Forma ideal de hacerlo con expresion reagular
const reactrewords = content.match(/react/gi ?? []).length;

console.log('Palabras: ', words.length);
console.log('Palabras react:', reactwords);
console.log('Palabras react:', includereactword);
console.log('Palabras react:', reactrewords);
