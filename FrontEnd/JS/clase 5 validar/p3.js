cambiar = () => {
    let text = document.getElementById("mostrar").innerHTML;
    document.getElementById("mostrar").innerHTML = text.replace(/python/i, "NodeJS, luego si le toca el de python")
}