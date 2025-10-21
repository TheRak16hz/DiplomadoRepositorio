const index = require("./index.js");


console.log("valor de index desde app.js")
// console.log(index) //ejecuta al parecer todo lo del archivo

console.log("valor ya con llamado a la funcion que se importo desde otro archivo: \n")

let salida = index.proceso(8,40);
console.log(salida)

salida = index.proceso(8,2);
console.log(salida)

salida = index.proceso(2,2);
console.log(salida)
////////////////////////////////
////////////////////////////////


// const metodos = require("./metodos.js")
// console.log(metodos.dia());
// console.log(metodos.noche());


//metodo de desestructuracion de objetos

const {dia} = require("./metodos.js")
const {noche} = require("./metodos.js")

console.log(dia())
console.log(noche())