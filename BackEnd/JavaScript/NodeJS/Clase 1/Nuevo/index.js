const proceso=(n1,n2) => {
    if (n1>n2) {
        mensaje = `${n1} es mayor que ${n2}`;
    } else if (n2>n1 && n2!==n1) {
        mensaje = `${n2} es mayor que ${n1}`;
    } else {
        mensaje = `${n1} es igual que ${n2}`;
    }
    return mensaje;
}

// let salida = proceso(8,40);
// console.log(salida);

console.log("valor de module.exports desde index.js")
console.log(module.exports);
console.log(module.exports.proceso);

module.exports.proceso=proceso;

console.log(module.exports);
console.log(module.exports.proceso);