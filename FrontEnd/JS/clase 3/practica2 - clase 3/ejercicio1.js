
function recibirDatos() {
    var nom = prompt("escribe tu nombre")
    var ape = prompt("escribe tu apellido")
    var year_nac = parseInt(prompt("ingresa tu año de nacimiento"))
    var year_actual = parseInt(prompt("ingresa el año actual"))
    return [nom,ape,year_nac,year_actual]
}

function calcEdad(nacimiento, actual) {
    var age = actual - nacimiento
    return age
}

function mayorEdad(old) {
    if (old >= 18) {
        alert("eres mayor de edad")
    } else if (old < 18) {
        alert("aun no eres mayor de edad")
    }
}
/////////////////////////////////

//ingresamos los datos
var contenedor = recibirDatos()

alert("datos ingresados: ")
for (let x=0;x<contenedor.length;x++) {
    alert(`${contenedor[x]}`)
}

//calculamos la edad
var edad = calcEdad(contenedor[2], contenedor[3])

//mostramos la edad
alert("tu edad es " + edad)

//mostramos si es mayor o no
mayorEdad(edad)

