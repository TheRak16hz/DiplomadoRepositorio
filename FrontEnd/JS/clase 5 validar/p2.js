/*let texto = "un texto largo para buscar, Oye gamer, quieres jugar videojuegos? pues yo si quiero que te parece si probamos, League of Legends. suena divertido, combate junto a tus amigos" */

let texto = "el instrictor de JS es el Ing. Vidermid 2023/05/09, el curso tiene una duracion de seis clases de 4 horas cada una";

//let patron = /league\sof\slegends/i;
let patron = /vidermid/i;

//let resultado = texto.match(patron)
let resultado = texto.search(patron)

resultado = `el patron buscado se encuentra a partir del digito: ${resultado}`
document.getElementById("imprime").innerHTML = resultado