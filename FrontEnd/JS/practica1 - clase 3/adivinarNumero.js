const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let suposicion = 0;

let intentos = 0;

while (suposicion !== numeroSecreto) {
    suposicion = parseInt(prompt("Adivina el numero entre 1 y 10: "))
    intentos++
    if (suposicion < numeroSecreto) {
        alert("demasiado bajo, intenta de nuevo")
    } else if (suposicion > numeroSecreto) {
        alert("demasiado alto, intenta de nuevo")
    }
}
alert(`felicidades, el numero secreto era ${numeroSecreto}\n adivinaste despues de ${intentos} intentos`)