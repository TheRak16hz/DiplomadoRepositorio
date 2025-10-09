//este script demuestra como trabajar con arreglos en JavaScript

let listaDeNombres = ["Carlos", "Ana", "Luis"];
console.log("arreglo inicial: ", listaDeNombres);

//Aceder y modificar un valor en en arreglo

listaDeNombres[1] = "Andrea";
console.log("arreglo despues de la modificacion ", listaDeNombres);

//el metodo .push() es la forma mas comun de añadir un elemento

listaDeNombres.push("Maria");
console.log("arreglo con el nuevo nombre añadido: ", listaDeNombres);

//recorrer el arreglo para mostrar todos sus elementos

console.log("\n mostrando cada nombre con su posicion: ");
for (let i=0;i<listaDeNombres.length;i++) {
    console.log(`posicion ${i}: ${listaDeNombres[i]}`);
}