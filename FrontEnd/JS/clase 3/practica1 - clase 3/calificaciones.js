const calificaciones = [18,15,19,20,16,17,13,19,18];

let sumaDeCalificaciones = 0;

calificaciones.forEach(function(calificacion) {
    sumaDeCalificaciones += calificacion;
});

const promedio = sumaDeCalificaciones / calificaciones.length;

console.log("---calculo de calificaciones (del 1-20)---");
console.log(`calificaciones: [${calificaciones.join(',')}]`);
console.log(`suma total: ${sumaDeCalificaciones}`);
console.log(`numero de calificaciones ${calificaciones.length}`);
console.log(`el promedio de la seccion es ${promedio.toFixed(2)}`);