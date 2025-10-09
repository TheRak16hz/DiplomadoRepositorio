let a=[]; //creamos un array nuevo
console.log(a); //imprimimos el array en consola
document.write(a.length)// imprimimos la longitud de elementos del array

var n=[35,22,100,7,88,44];

const f = ["Hola", "Hi", "Epale", "Que onda"];

let g = [true, "saludo", 4, [22,63,24,10],"a"];

document.write(g[2]);

////////////////////////////////////////

let z = Array.of(33,56,42,22) //declaracion

console.log("arreglo original: ");
console.log(z);

console.log("a continuacion vemos ejemplos de salidas y operaciones con arreglos: ");

console.log("valor especifico en la posicion '2' del arreglo " + z[2]);

z.push(88);

console.log("arreglo con un nuevo elemento al final " + z);

z.pop();

console.log("arreglo menos el elemento de la ultima celda: " + z);