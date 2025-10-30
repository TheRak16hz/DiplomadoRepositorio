
function validaCampoVacio(campo) {
    const valorCampo = campo.value.trim(); 
    if (valorCampo.length === 0) {
        campo.classList.add("invalida");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Este campo no puede estar vacío";
        return false;
    } else {
        campo.classList.remove("invalida");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
        return true;
    }
}

const elementoCodigo = document.querySelector("[name=cod_zon]");
const elementoNombre = document.querySelector("[name=nom_zon]");
const elementoAcronimo = document.querySelector("[name=acr_zon]");
const elementoDiferencia = document.querySelector("[name=dif_zon]");
const elementoEstatus = document.querySelector("[name=est_zon]");

elementoCodigo.addEventListener("blur", function (evento) {
    const Campo = evento.target;
    
    if (validaCampoVacio(Campo)) {
        let codigo = Campo.value.trim();
        let regExp = /^[0-9]+$/; 
        let esValido = regExp.test(codigo);
        
        if (esValido) {
            Campo.classList.remove("invalida");
            Campo.nextElementSibling.classList.remove("error");
            Campo.nextElementSibling.innerText = "";
        } else {
            Campo.classList.add("invalida");
            Campo.nextElementSibling.classList.add("error");
            Campo.nextElementSibling.innerText = "El código debe contener solo números";
        }
    }
});

elementoNombre.addEventListener("blur", function (evento) {
    const Campo = evento.target;
    
    if (validaCampoVacio(Campo)) {
        let nombre = Campo.value.trim();
        let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-\(\)\/]+$/; 
        let esValido = regExp.test(nombre);
        
        if (esValido) {
            Campo.classList.remove("invalida");
            Campo.nextElementSibling.classList.remove("error");
            Campo.nextElementSibling.innerText = "";
        } else {
            Campo.classList.add("invalida");
            Campo.nextElementSibling.classList.add("error");
            Campo.nextElementSibling.innerText = "El nombre debe contener solo letras";
        }
    }
});

elementoAcronimo.addEventListener("blur", function (evento) {
    const Campo = evento.target;
    
    if (validaCampoVacio(Campo)) {
        let acronimo = Campo.value.trim();
        let regExp = /^[A-Z0-9\+\-]+$/; 
        let esValido = regExp.test(acronimo);
        
        if (esValido) {
            Campo.classList.remove("invalida");
            Campo.nextElementSibling.classList.remove("error");
            Campo.nextElementSibling.innerText = "";
        } else {
            Campo.classList.add("invalida");
            Campo.nextElementSibling.classList.add("error");
            Campo.nextElementSibling.innerText = "El acrónimo debe estar en mayúsculas (Ej: GMT, EST, PST)";
        }
    }
});

elementoDiferencia.addEventListener("blur", function (evento) {
    const Campo = evento.target;
    
    if (validaCampoVacio(Campo)) {
        let diferencia = Campo.value.trim();
        let regExp = /^[\+\-]?[0-9]+(\.[0-9]+)?$/;
        let esValido = regExp.test(diferencia);
        
        if (esValido) {
            let valor = parseFloat(diferencia);
            if (valor >= -12 && valor <= 14) {
                Campo.classList.remove("invalida");
                Campo.nextElementSibling.classList.remove("error");
                Campo.nextElementSibling.innerText = "";
            } else {
                Campo.classList.add("invalida");
                Campo.nextElementSibling.classList.add("error");
                Campo.nextElementSibling.innerText = "La diferencia debe estar entre -12 y +14 horas";
            }
        } else {
            Campo.classList.add("invalida");
            Campo.nextElementSibling.classList.add("error");
            Campo.nextElementSibling.innerText = "Formato inválido. Ejemplo: +5, -3, +5.5";
        }
    }
});

elementoEstatus.addEventListener("blur", function (evento) {
    const Campo = evento.target;
    const valorSeleccionado = Campo.value; 

    if (valorSeleccionado === "") { 
        Campo.classList.add("invalida");
        Campo.nextElementSibling.classList.add("error");
        Campo.nextElementSibling.innerText = "Por favor, seleccione una opción";
    } else {
        Campo.classList.remove("invalida");
        Campo.nextElementSibling.classList.remove("error");
        Campo.nextElementSibling.innerText = "";
    }
});

const formulario = document.querySelector("form"); 

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let codigoValido = false;
    if (validaCampoVacio(elementoCodigo)) {
        let codigo = elementoCodigo.value.trim();
        let regExp = /^[0-9]+$/;
        codigoValido = regExp.test(codigo);
        
        if (!codigoValido) {
            elementoCodigo.classList.add("invalida");
            elementoCodigo.nextElementSibling.classList.add("error");
            elementoCodigo.nextElementSibling.innerText = "El código debe contener solo números";
        }
    }

    let nombreValido = false;
    if (validaCampoVacio(elementoNombre)) {
        let nombre = elementoNombre.value.trim();
        let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-\(\)\/]+$/;
        nombreValido = regExp.test(nombre);
        
        if (!nombreValido) {
            elementoNombre.classList.add("invalida");
            elementoNombre.nextElementSibling.classList.add("error");
            elementoNombre.nextElementSibling.innerText = "El nombre debe contener solo letras";
        }
    }

    let acronimoValido = false;
    if (validaCampoVacio(elementoAcronimo)) {
        let acronimo = elementoAcronimo.value.trim();
        let regExp = /^[A-Z0-9\+\-]+$/;
        acronimoValido = regExp.test(acronimo);
        
        if (!acronimoValido) {
            elementoAcronimo.classList.add("invalida");
            elementoAcronimo.nextElementSibling.classList.add("error");
            elementoAcronimo.nextElementSibling.innerText = "El acrónimo debe estar en mayúsculas (Ej: GMT, EST, PST)";
        }
    }

    let diferenciaValida = false;
    if (validaCampoVacio(elementoDiferencia)) {
        let diferencia = elementoDiferencia.value.trim();
        let regExp = /^[\+\-]?[0-9]+(\.[0-9]+)?$/;
        let esValido = regExp.test(diferencia);
        
        if (esValido) {
            let valor = parseFloat(diferencia);
            if (valor >= -12 && valor <= 14) {
                diferenciaValida = true;
            } else {
                elementoDiferencia.classList.add("invalida");
                elementoDiferencia.nextElementSibling.classList.add("error");
                elementoDiferencia.nextElementSibling.innerText = "La diferencia debe estar entre -12 y +14 horas";
            }
        } else {
            elementoDiferencia.classList.add("invalida");
            elementoDiferencia.nextElementSibling.classList.add("error");
            elementoDiferencia.nextElementSibling.innerText = "Formato inválido. Ejemplo: +5, -3, +5.5";
        }
    }

    const estatusValido = (elementoEstatus.value !== "");
    
    if (!estatusValido) {
        elementoEstatus.classList.add("invalida");
        elementoEstatus.nextElementSibling.classList.add("error");
        elementoEstatus.nextElementSibling.innerText = "Por favor, seleccione una opción";
    }

    if (!codigoValido || !nombreValido || !acronimoValido || !diferenciaValida || !estatusValido) {
        alert("Por favor, corrija los errores en el formulario antes de enviarlo");
        return;
    }

    const datos = {
        cod_zon: elementoCodigo.value.trim(),
        nom_zon: elementoNombre.value.trim(),
        acr_zon: elementoAcronimo.value.trim(),
        dif_zon: elementoDiferencia.value.trim(),
        est_zon: elementoEstatus.value
    };

    console.log("Datos de la zona horaria:", datos);
    alert("Zona Horaria agregada exitosamente");
});