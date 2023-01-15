
//Usar REQUIRE para llamar un archivo js a otro archivo js
const matematica = require('./matematica.js')

//Para usar las funciones del otro archivo se deben de primero llamar el archivo js (matematicas) y despues la funcion (dividir)
console.log(matematica.suma(1,0));