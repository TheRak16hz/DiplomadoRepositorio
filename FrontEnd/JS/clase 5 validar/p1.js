let texto = "el instrictor de JS es el Ing. Vidermid 2023/05/09, el curso tiene una duracion de seis clases de 4 horas cada una";
let patron = /Vidermid\s2023/i;
let resultado = texto.match(patron);
resultado = `El texto en contrado es ${resultado}`;
document.getElementById("imprime").innerHTML = resultado;