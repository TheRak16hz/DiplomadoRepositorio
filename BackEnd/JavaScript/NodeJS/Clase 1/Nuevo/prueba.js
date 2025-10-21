// console.warn("atencion no ha guardado")
// console.log("seguimos ejecutando el script")

// console.error(new Error("Base de datos no encontrada"))
// console.log("seguimos ejecutando el script")

//  console.assert()
//  console.table()


/////////////////////////////////////////////////////////////////
const fs=require('fs')
fs.readFile('texto.csv', 'utf-8', (error, palabras) => {
    if(error) {
        console.error(error) //throw error
    } else {
        console.error(palabras)
    }
});
