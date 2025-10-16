//////////////////////////////////Grafica de vectorial lineal//////////////////////////////////////
// interactuando con el DOM
const $g1 = document.querySelector("#g1");
// Titulos del eje X
const periodos = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio']
// Datos a Graficar
const data = {
    labels: periodos,
    datasets: [{
        label: 'Comportamiento en la Producción',
        data: [65,59,80,81,26,55,40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)', // colores
    }]
};

new Chart($g1, {
    type:'line',
    data:data,
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true,
            }
        },
        scales: {
            y: { //definir minimo y maximo para que ocultar el conjunto de datos no cambie el rango de la escala
                min: 0,
                max: 100
            }
        }
    }
});

//interactuando con el DOM
const $g2 = document.querySelector("#g2");
//titulos del eje X
const titulos = ["Camisas", "Pantalones", "Medias", "Bufandas"];
//datos a graficar (pueden ser varias series)
const valores1 = {
    label: "produccion semanal 1",
    data: [78,208,100,75], //arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(232,255,41,0.5)', //color de fondo
    borderColor: 'rgba(232,255,41,1)', //color del borde
    borderWidth: 1, //ancho del borde
};

const valores2 = {
    label: "produccion semanal 2",
    data: [189,45,8,200], //arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255,58,41,0.5)', //color fondo
    borderColor: 'rgba(255,58,41,1)', // color borde
    borderWidth: 1, // ancho borde
};

const valores3 = {
    label: "produccion semanal 3",
    data: [345,187,216,97],
    backgroundColor: 'rgba(58,41,255,0.5)',
    borderColor: 'rgba(58,41,255,1)',
    borderWidth: 1,
};

new Chart($g2, {
    type: 'bar', //tipo
    data: {
        labels: titulos,
        datasets: [
            valores1,
            valores2,
            valores3,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

//interactuamos con el DOM
const $g3 = document.querySelector("#g3");
//las etiquetas son las porciones de la grafica
const cabecera = ["Locales", "Estadales", "Nacionales", "internacionales"]
//podemos tener varios conjuntos de datos. comencemos con uno
const numeros = {
    data: [40,25, 89, 200], //arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    //un color para cada area
    backgroundColor: [
        'rgba(120, 18, 18, 0.5)',
        'rgba(22, 18, 120, 0.5)',
        'rgba(43, 250, 2, 0.5)',
        'rgba(255,41,242, 0.5)',
    ], //color de fondo
    borderColor: [
        'rgba(120, 18, 18, 1)',
        'rgba(22, 18, 120, 1)',
        'rgba(43, 250, 2, 1)',
        'rgba(255,41,242, 1)',
    ], //color del borde
    borderWidth: 1,
}

new Chart($g3, {
    type: 'pie', //tipo
    data: {
        labels: cabecera,
        datasets: [
            numeros,
            // podrian ser mas
        ]
    },
});


//interactuando con el DOM
const $g4 = document.querySelector("#g4");
//las etiquetas son las porciones de la grafica
const arriba = ["Hilos", "Saten", "Permalina", "Lino"]
//podemos tener varios conjuntos de datos. comencemos con uno
const muchos = {
    data: [356,195,270,568], // arreglo tiene lamisma cantidad de valores que la cantidad de etiquetas
    //un color por cada area
    backgroundColor: [
        'rgba(26, 188, 156, 0.5)',
        'rgba(211, 84, 0, 0.5)',
        'rgba(121, 125, 127, 0.5)',
        'rgba(91, 44, 111, 0.5)',
    ], // color de fondo
    borderColor: [
        'rgba(26, 188, 156, 1)',
        'rgba(211, 84, 0, 1)',
        'rgba(121, 125, 127, 1)',
        'rgba(91, 44, 111, 1)',
    ], //color del borde
    borderWidth: 1, //ancho del borde
};

new Chart($g4, {
    type: 'doughnut', //tipo
    data: {
        labels: arriba,
        datasets: [
            muchos,
            //podrian ser mas
        ]
    },
});