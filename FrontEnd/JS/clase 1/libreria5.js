//4. asignacion y cambio de tipos de datos

let valor = "100";

//tipo de dato: string (cadena de texto)
console.log("\nValor inicial (string): ", valor, " Tipo: ", typeof valor)

//usamos parseInt() para convertir el string a un numero entero.
valor = parseInt(valor)

//el tipo de dato cambia de string a number
console.log("Valor convertido (numero): ", valor, " Tipo: ", typeof valor)

//podemos convertirlo de nuevo a un string

valor = valor.toString();

//el tipo de dato cambia de number a string
console.log("Valor convertido de nuevo (string): ", valor, " Tipo: ", typeof valor)