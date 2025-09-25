let n = 0;
let notas=[];
let x;
let suma=0;
let prom=0;
let notaMin = 0;
let notaMax = 0;

do {
    n = parseInt(prompt("ingrese la cantidad de notas a registrar: "));
} while (isNaN(n) || n<1);



for (x=0; x<n; x++) {
    do {
        notas[x]=parseFloat(prompt(`ingrese la nota de la persona ${x+1}: `));
    } while ( (isNaN(notas[x])) || (notas[x]<1 || notas[x]>20) );

    if (notas[x]<11) {
        alert("estudiante Reprobado :c")
    } else {
        alert("Estudiante Aprobado :D")
    }
    suma=suma+notas[x];
};
prom=suma/n;

//alert(`la longitud de notas es ${notas.length}`)
alert(`El promedio de la seccion es ${prom}`)

//calcular la nota minima
//tomamos el primer elemento y lo comparamos con los demas, si es mayor, se reemplaza
notaMin = notas[0]
for (x=0; x<=notas.length; x++) {
    if (notas[x]< notaMin) {
        notaMin = notas[x]
    }
}

notaMax = notas[0]
for (x=0; x<=notas.length; x++) {
    if (notas[x]> notaMax) {
        notaMax = notas[x]
    }
}

alert(`la nota minima es ${notaMin}`)
alert(`la nota maxima es ${notaMax}`)




