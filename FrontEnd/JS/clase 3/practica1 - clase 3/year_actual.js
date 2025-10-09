const anioActual = new Date().getFullYear();

let anioNacimiento = prompt("ingrese su año de nacimiento: ");

anioNacimiento = parseInt(anioNacimiento);

if(isNaN(anioNacimiento)) {
    alert("entrada no valida, por favor ingrese un numero")
} else {
    let edad = anioActual - anioNacimiento
    console.log(`tu edad es ${edad} años`)
}