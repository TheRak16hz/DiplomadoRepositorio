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



function mayor(a,b) {
    if (a > b) {
        let result = `${a} es mayor`
        return result
    } else if (b > a) {
        let result = `${b} es mayor`
        return result
    } else {
        let result = "no hay mayor"
        return result
    }
}

function menor(a,b) {
    if (a < b) {
        let result = `${a} es menor`
        return result
    } else if (b < a) {
        let result = `${b} es menor`
        return result
    } else {
        let result = "no hay menor"
        return result
    }
}

function igualdad(a,b) {
    if (a == b) {
        let result = "ambos numeros son iguales"
        return result
    } else {
        let result = "no son iguales"
        return result
    }
}

function modulo(a,b) {
    let result = a % b
    return result
}

function factorial(a) {
    //console.log("a vale" + a)
    let lista = []
    for (let x=1;x<=a;x++) {
        lista[x-1] = x
    }

    let result = 0
    for (let x=0;x<a;x++) {
        if (x==0) {
            console.log(`valor de ${lista[x]}`)
            result = result + lista[x]
        } else {
            result = result * lista[x]
        }
    //onsole.log(`valor de result es ${result}`)
    }
    //console.log(`result es ${result}`)
    return result
}


function calcular() {

    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    const operacion = document.getElementById("operacion").value
    const resultadoLabel = document.getElementById('resultadoLabel');
    let resultado = 0
    //console.log(operacion)


    if ((isNaN(n2) && !isNaN(n1)) && (operacion === "raiz" || operacion === "factorial")) {
        //funciones especiales
        console.log("funcion especial")
        if (operacion === "raiz") {
            resultado = raiz(n1)
        } else if (operacion === "factorial") {
        resultado = factorial(n1)
        }

    //funciones normales a partir de aqui
    } else if (isNaN(n1) || isNaN(n2)) {
        alert("los valores numericos no son validos")
        return resultadoLabel.innerHTML = `Resultado:`;
    }

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
    } else  if (operacion === "mayor") {
        resultado = mayor(n1,n2)
    } else if (operacion === "menor") {
        resultado = menor(n1,n2)
    } else if (operacion === "igualdad") {
        resultado = igualdad(n1,n2)
    } else if (operacion === "modulo") {
        resultado = modulo(n1,n2)
    } else if (operacion === "factorial") {
        resultado = factorial(n1)
    }


    if (!isNaN(resultado)) {
        if (Number.isInteger(resultado)) {
        resultadoLabel.innerHTML = `Resultado: ${parseInt(resultado)}`
        } else {
            resultadoLabel.innerHTML = `Resultado: ${resultado.toFixed(2)}`
        }
    } else {
        resultadoLabel.innerHTML = `Resultado: ${resultado}`
    }
}




