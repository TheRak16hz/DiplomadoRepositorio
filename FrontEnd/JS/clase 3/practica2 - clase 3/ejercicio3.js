/*Elabore un Script JS con el uso de funciones y validaciones que permita mostrarle al usuario un menú de opciones para seleccionar la operación básica de calculo que desea realizar (sumar, restar, multiplicar o dividir), posteriormente debe ingresar dos números positivos. Al finalizar el proceso de registro y calculo el usuario deberá responder si desea o no realizar otra operación. */

function sumar(a,b) {
    let result = a + b
    return result
}

function restar(a,b) {
    let result = a - b
    return result
}

function dividir(a,b) {
    let result = a / b
    return result
}

function multiplicar(a,b) {
    let result = a * b
    return result
}

function potencia(a,b) {
    let result = a ** b
    return result
}

function raiz(a) {
    let result = Math.sqrt(a)
    return result
}


function calcular() {

    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    const operacion = document.getElementById("operacion").value
    const resultadoLabel = document.getElementById('resultadoLabel');
    let resultado = 0
    //console.log(operacion)

    if (isNaN(n1) || isNaN(n2)) {
        alert("los valores numericos no son validos")
    } else ("numeros validos")

    if (operacion === "sumar") {
    resultado = sumar(n1,n2)
    } else if (operacion === "restar") {
        resultado = restar(n1,n2)
    } else if (operacion === "dividir") {
        resultado = dividir(n1,n2)
    } else if (operacion === "multiplicar") {
        resultado = multiplicar(n1,n2)
    } else if (operacion === "potencia") {
        resultado = potencia(n1,n2)
    } else if (operacion === "raiz") {
        resultado = raiz(n1)
    }

    resultadoLabel.innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}




