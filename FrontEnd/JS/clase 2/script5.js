//juego de adivinar el numero

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let suposicion = 0;
let intentos = 0;

while (suposicion !== numeroSecreto) {
    suposicion = parseInt(prompt("adivina el numero secreto, del 1 al 10"));
    
    intentos++;

    if (suposicion < numeroSecreto) {
        alert("el numero es muy bajo, intenta de nuevo");
    } else if (suposicion > numeroSecreto) {
        alert("el numero es muy alto, intenta nuevamente");
    } 
}

alert(`felicidades, el numero secreto era ${numeroSecreto}. adivinaste con ${intentos} intentos`)