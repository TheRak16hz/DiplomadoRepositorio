//2 uso de let
// tiene un alcance de bloque (dentro de {})

let edad = 20
console.log("\n Varible 'let' inicial:", edad, " años.");

edad = 21
console.log("variable 'let' actualizada: ", edad, " años.")

//intentar redeclarar "let" en el mismo bloque daria error
//let edad = 22
//esto causaria un error



//3. uso de 'const' (para variables que no van a cambiar)
// 'const' tambien tiene un alcance de bloque
// no puede ser actualizada ni redeclarada

const PI = 3.14159;
console.log("\nVariable 'const' inicial: ", PI);

//intentar actualizar const
//const PI = 3.1415
//da error el intentar de redeclarar una constante