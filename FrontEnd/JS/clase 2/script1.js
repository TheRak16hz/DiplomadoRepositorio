//1. obtener el año actual
//el objeto "date" nos da informacion sobre la fecha y hora
const yearActual = new Date().getFullYear();

console.log("el año actual es " + yearActual)

//2. le pedimos al usuario que ingrese su año de nacimiento
// prompt() abre una ventana emergente para que el usuario escriba
// el valor que devuelve es siempre un texto "string"

let yearBirth = prompt("Por favor, ingresa tu año de nacimiento: " + yearActual)

//3. convertimos el año de nacimiento (que es un string) a un numero entero.
// esto es fundamental para poder hacer operaciones matematicas

yearBirth = parseInt(yearBirth)

//4. verificamos si la entrada es un numero valido
// IsNaN significa "Not a Number (¿No es un numero?)"
if (isNaN(yearBirth)) { // si no es un numero, mostramos un mensaje de error
    console.log("entrada no valida, por favor, ingresa un numero");
} else {
    //si es un numero, calculamos la edad
    let edad = yearActual - yearBirth;
    //mostramos el resultado en consola
    alert(`tu edad es aproximadamente ${edad} años`)
}


















