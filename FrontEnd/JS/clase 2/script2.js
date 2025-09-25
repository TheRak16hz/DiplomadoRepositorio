//1. creamos una variable para el color semaforo
// podemos cambiar este color para probar diferentes casos

let colorSemaforo = "rojo"; //puedes ser amarillo, verde, etc

//2. usamos la estructura if-else para evaluar el color

if (colorSemaforo === "verde") { // === para igualdad estricta
    console.log("puedes cruzar !")
} else if (colorSemaforo === "amarillo") {
    console.log("cuidado, debes ir frenando")
} else if (colorSemaforo === "rojo") {
    console.log("Detente! no puedes cruzar")
} else {
    console.log("el color no es valido")
}


