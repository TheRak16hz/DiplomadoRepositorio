let z =Array.of(33,56,43,22);
document.write('<h2>valores almacenados en el arreglo: </h2>');

z.forEach(function(value, i) {
    document.write('el elemento ' + value + ' esta en la posicion ' + i + '<br>');
});
