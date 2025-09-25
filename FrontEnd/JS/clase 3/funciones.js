function leer() {
    let nom=prompt("ingrese su nombre")
    let edad=prompt("ingrese su edad")
    return [nom,edad]
}

let mostrar = function(algo) {
    alert(algo[0])
}

let mas=(algo)=>{
    alert(algo[1])
}

let valores=leer();
mostrar(valores);
mas(valores);