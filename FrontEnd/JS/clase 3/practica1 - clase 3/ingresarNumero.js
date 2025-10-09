let numeroUsuario;

do {
    numeroUsuario = parseInt(prompt("ingresa un numero mayor a 10"))
    if (isNaN(numeroUsuario) || numeroUsuario <=10) {
        alert("entrada no valida, el numero debe ser mayor a 10")
    }
} while (isNaN(numeroUsuario) || numeroUsuario <= 10);
alert(`excelente! el numero que ingresaste es ${numeroUsuario}`)