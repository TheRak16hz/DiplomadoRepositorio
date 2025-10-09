var cant_genero = [0,0];
var cant_client_age = [0,0];
var answer = "";
var monto_total = 0;

do {
    alert("bienveniedo, a nuestra tienda, por favor administre los siguientes datos: \n");
    
    let rif = prompt("ingrese su RIF: ");
    let apellido = prompt("ingrese su apellido: ");
    let nombre = prompt("ingrese su nombre: ");

    let edad = parseInt(prompt("ingrese su edad: "));
    if (edad >= 50) {
        cant_client_age[1]+=1;
    } else if (edad <= 49 && edad > 0) {
        cant_client_age[0]+=1;
    } else {
        console.log("error, edad invalida")
    }

    let gender = prompt("ingrese su genero (M / F): ")
    if (gender === "M") {
        cant_genero[0]+=1;
    } else if (gender === "F") {
        cant_genero[1]+=1;
    } else {
        console.log("error, genero no valido")
    }

    let cant_product = parseInt(prompt("ingrese la cantidad de productos que desea comprar: "));
    let prec_product = parseFloat(prompt("ingrese el precio del producto: "));

    let prec_total_cli = cant_product * prec_product;
    alert(`el precio total a pagar es ${prec_total_cli}\n`)
    monto_total += prec_total_cli;

    answer = prompt("desea seguir facturando? (S/N): ");

} while (answer == "S" || answer== "s")



alert(`fin del proceso de ventas\n total de personas mayores a 50: ${cant_client_age[1]}\n cantidad de personas menores a 50: ${cant_client_age[0]}\n cantidad de hombres: ${cant_genero[0]}\n cantidad de mujeres: ${cant_genero[1]}\n total ingresado a la empresa: ${monto_total}.`)