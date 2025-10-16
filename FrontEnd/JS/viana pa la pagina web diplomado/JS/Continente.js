
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

const elementoCodigo = document.querySelector("[name=cod_con]");
const elementoNombre = document.querySelector("[name=nom_con]");
const elementoDescripcion = document.querySelector("[name=des_con]");
const elementoEstatus = document.querySelector("[name=est_con]");

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
        let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
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

elementoDescripcion.addEventListener("blur", function (evento) {
    const Campo = evento.target;
    Campo.classList.remove("invalida");
    Campo.nextElementSibling.classList.remove("error");
    Campo.nextElementSibling.innerText = "";
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
        let regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        nombreValido = regExp.test(nombre);
        
        if (!nombreValido) {
            elementoNombre.classList.add("invalida");
            elementoNombre.nextElementSibling.classList.add("error");
            elementoNombre.nextElementSibling.innerText = "El nombre debe contener solo letras";
        }
    }

    const estatusValido = (elementoEstatus.value !== "");
    
    if (!estatusValido) {
        elementoEstatus.classList.add("invalida");
        elementoEstatus.nextElementSibling.classList.add("error");
        elementoEstatus.nextElementSibling.innerText = "Por favor, seleccione una opción";
    }

    if (!codigoValido || !nombreValido || !estatusValido) {
        alert("Por favor, corrija los errores en el formulario antes de enviarlo");
        return;
    }

    const datos = {
        cod_con: elementoCodigo.value.trim(),
        nom_con: elementoNombre.value.trim(),
        des_con: elementoDescripcion.value.trim(),
        est_con: elementoEstatus.value
    };

    console.log("Datos del continente:", datos);
    alert("Continente agregado exitosamente");
});