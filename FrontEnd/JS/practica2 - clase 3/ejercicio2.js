/*Elabore un Script JS con el uso de funciones y validaciones para registrar N veces el nombre, apellido, nota de matemática, nota de física, nota de química y nota de programación de los estudiantes de una sección. la escala de calificaciones es del 1 al 20. Se desea obtener el promedio de la sección y el promedio individual de cada persona. */

function cantEstudiantes() {
    do {
        var n = parseInt(prompt("ingresa una cantidad de estudiantes: "))
        if (isNaN(n) || n < 0) {
            alert("el numero no es valido")
        }
    } while (isNaN(n) || n < 0)
    return n
}

function regNotas() {
    const materias = ['matemática', 'física', 'química', 'programación']
    var notas = []
    for (var y=0;y<materias.length;y++) {
        do {
            var nota = parseInt(prompt(`ingrese la nota de ${materias[y]}`))
            if (isNaN(nota) || (nota<1 || nota>20)) {
                alert("la nota no es valida, intente de nuevo")
            }
        } while (isNaN(nota) || (nota<1 || nota>20))
        notas[y] = nota
    }

    return notas
}

function promEst(n_est) {
    var p_est = 0
    for (x=0;x<n_est.length;x++) {
        p_est += n_est[x]
    }
    p_est = parseFloat(p_est/n_est.length)
    return p_est
}

//////////////////////////////////

var estudiantes = []
var x = 0
//aqui almacenamos la cantidad de estudiantes
N = cantEstudiantes()

//iniciamos el ciclo para cada tarea pendiente
for (var i=0;i<N;i++) {
    alert(`estudiante numero ${i+1}`)
    var nom = prompt("ingrese su nombre")
    var ape = prompt("ingrese su apellido")
    alert("registro de las notas")
    var notas_est = regNotas()
    var prom_est = promEst(notas_est)
    estudiantes.push({nombre: nom, apellido: ape, notasEstudiante: notas_est, promedioEstudiante:prom_est})
}


var prom_secc = 0
estudiantes.forEach((valor, indice) => {
    console.log(`estudiante numero ${indice+1}`)
    console.log(`nombre: ${valor.nombre} ${valor.apellido}`)
    console.log("------------notas--------------")
    console.log(`matematica: ${valor.notasEstudiante[0]}`)
    console.log(`fisica: ${valor.notasEstudiante[1]}`)
    console.log(`quimica: ${valor.notasEstudiante[2]}`)
    console.log(`programacion: ${valor.notasEstudiante[3]}`)
    console.log(`promedio del estudiante: ${valor.promedioEstudiante.toFixed(2)}`)
    console.log("------------------------------------------")
    prom_secc += valor.promedioEstudiante
})

prom_secc = parseFloat(prom_secc/estudiantes.length)
console.log(`el promedio de la seccion es ${prom_secc.toFixed(2)}`)