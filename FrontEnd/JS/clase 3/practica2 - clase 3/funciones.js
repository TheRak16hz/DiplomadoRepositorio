function bienvenido(nom) {
    document.write("hola " + nom);
}

bienvenido("maria")

const comentario = function(nom) {
    document.write("Hola " + nom)
}
comentario('maria')

const coment = (nom) => {
    document.write("hola: " + nom)
}

coment("maria")

////////////////////////////////////

function bienvenido(nombre) {
    console.log(`hola ${nombre} bienvenido a nuestro sitio`)
}

bienvenido("maria")

////////////////////////////

const mostrarMensaje = function(mensaje) {
    console.log(`mensaje recibido: ${mensaje}`)
}
mostrarMensaje("esto es un mensaje importante")


//////////////////////////////////

const calcularArea = (base, altura) => {
    return base * altura;
}

const areaRectangulo = calcularArea(10, 5)
console.log(`el area del rectangulo es ${areaRectangulo}`)

const duplicar = numero => numero * 2

/* es exactamente lo mismo
const duplicar = (numero) => {
    return numero * 2
}
*/

console.log(`el doble de 8 es: ${duplicar(8)}`)