/*const valida = () => {
    let xcor_cli = document.getElementById("cor_cli").value;
    alert(`tu correo es ${xcor_cli}`);
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let valida = regExp.test(xcor_cli)
    if (valida) {
        alert('el correo es valido')
    } else {
        alert("el correo no sirve pa un cño")
    }
}*/


/*const elemento_cor = document.querySelector("[name=cor_cli]");
const validaCompoVacio = (evento) => {
    const Campo=evento.target;
    const valorCampo = evento.target.value;

    if (valorCampo.length===0) {
        Campo.classList.add("invalida");
        Campo.nextElementSibling.classList.add("error");
        Campo.nextElementSibling.innerText=`${Campo.name} no puede estar vacio`;
    } else {
        Campo.classList.remove("invalida");
        Campo.nextElementSibling.classList.remove("error");
        Campo.nextElementSibling.innerText=" ";
    }
};
elemento_cor.addEventListener("blur", validaCompoVacio)*/


//validacion de cedula
const elementoIdentificacion = document.querySelector("[name=ide_cli]");
elementoIdentificacion.addEventListener("blur", function(evento) {
    const campoIdentificacion = evento.target;
    const valorCampoIdentificacion = evento.target.value;
    const regExpIde = /\d{8}/g
    let valida = regExpIde.test(valorCampoIdentificacion)
    //console.log(valida)
    if (!valida) {
        campoIdentificacion.classList.add("invalida");
        campoIdentificacion.nextElementSibling.classList.add("error");
        campoIdentificacion.nextElementSibling.innerText="la cedula no es valida (solo numeros, min. 8)";
    } else {
        campoIdentificacion.classList.remove("invalida");
        campoIdentificacion.nextElementSibling.classList.remove("error");
        campoIdentificacion.nextElementSibling.innerText="";
    }
});

//validar nombre
const elementoNombre = document.querySelector("[name=raz_cli]")
elementoNombre.addEventListener("blur", function(evento) {
    const campoNombre = evento.target;
    const valorCampoNombre = evento.target.value;
    const regExpName = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/g;

    let valida = regExpName.test(valorCampoNombre);

    const mensajeError = "Nombre inválido: No puede estar vacío, debe contener solo letras y no debe tener acentos ni caracteres especiales.";

    if (!valida) {
        campoNombre.classList.add("invalida");
        campoNombre.nextElementSibling.classList.add("error");
        campoNombre.nextElementSibling.innerText = mensajeError;
    } else {
        campoNombre.classList.remove("invalida");
        campoNombre.nextElementSibling.classList.remove("error");
        campoNombre.nextElementSibling.innerText = "";
    }
});

// Validacion de Direccion
const elementoDireccion = document.querySelector("[name=dir_cli]"); // Asume que el campo se llama 'dir_cli'
elementoDireccion.addEventListener("blur", function(evento) {
    const campoDireccion = evento.target;
    const valorCampoDireccion = evento.target.value;

    const regExpDir = /\S+/g;
    let valida = regExpDir.test(valorCampoDireccion);

    if (!valida) {
        campoDireccion.classList.add("invalida");
        campoDireccion.nextElementSibling.classList.add("error");
        campoDireccion.nextElementSibling.innerText = "La dirección no puede estar vacía";
    } else {
        campoDireccion.classList.remove("invalida");
        campoDireccion.nextElementSibling.classList.remove("error");
        campoDireccion.nextElementSibling.innerText = "";
    }
});

//validar telefono
const elementoTelefono = document.querySelector("[name=tel_cli]");
elementoTelefono.addEventListener("blur", function(evento) {
    const campoTelefono = evento.target;
    const valorCampoTelefono = evento.target.value

    const regExpTlf = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    let valida = regExpTlf.test(valorCampoTelefono)

    if (!valida) {
        campoTelefono.classList.add("invalida");
        campoTelefono.nextElementSibling.classList.add("error")
        campoTelefono.nextElementSibling.innerText = "telefono no valido"
    } else {
        campoTelefono.classList.remove("invalida")
        campoTelefono.nextElementSibling.classList.remove("error")
        campoTelefono.nextElementSibling.innerText = "";
    }
})

//validar correo
const elementoCorreo = document.querySelector("[name=cor_cli]");
elementoCorreo.addEventListener("blur", function(evento) {
    const CampoCorreo = evento.target;
    const valorCampoCorreo=evento.target.value

    const regExpEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
    let valida = regExpEmail.test(valorCampoCorreo)

    if (valorCampoCorreo.length===0 || !valida) {
        CampoCorreo.classList.add("invalida");
        CampoCorreo.nextElementSibling.classList.add("error");
        CampoCorreo.nextElementSibling.innerText = "el correo no es valido";
    } else {
        CampoCorreo.classList.remove("invalida");
        CampoCorreo.nextElementSibling.classList.remove("error");
        CampoCorreo.nextElementSibling.innerText="";
    }
});

// Validar Estatus (Select)
const elementoEstatus = document.querySelector("[name=est_cli]");

elementoEstatus.addEventListener("blur", function(evento) {
    const campoEstatus = evento.target;
    // La validación es simple: el valor seleccionado NO debe ser la cadena vacía ("")
    const valorSeleccionado = campoEstatus.value; 
    let valida = valorSeleccionado !== ""; 

    if (!valida) {
        campoEstatus.classList.add("invalida");
        campoEstatus.nextElementSibling.classList.add("error");
        campoEstatus.nextElementSibling.innerText = "Debe seleccionar una opción."; 
    } else {
        campoEstatus.classList.remove("invalida");
        campoEstatus.nextElementSibling.classList.remove("error");
        campoEstatus.nextElementSibling.innerText = "";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Referencias de los elementos del formulario
    const formulario = document.querySelector("form");
    const elementoIdentificacion = document.querySelector("[name=ide_cli]");
    const elementoNombre = document.querySelector("[name=raz_cli]");
    const elementoDireccion = document.querySelector("[name=dir_cli]");
    const elementoTelefono = document.querySelector("[name=tel_cli]");
    const elementoCorreo = document.querySelector("[name=cor_cli]");
    const elementoEstatus = document.querySelector("[name=est_cli]");

    // Función que se ejecuta al enviar el formulario
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Mostrar los valores en consola
        console.log("-----------------------------------------");
        console.log("   DATOS DEL CLIENTE ENVIADOS   ");
        console.log("-----------------------------------------");
        console.log("Identificación:", elementoIdentificacion.value);
        console.log("Razón Social:", elementoNombre.value);
        console.log("Dirección:", elementoDireccion.value);
        console.log("Teléfono:", elementoTelefono.value);
        console.log("Correo:", elementoCorreo.value);
        console.log("Estatus:", elementoEstatus.options[elementoEstatus.selectedIndex].text);
        console.log("-----------------------------------------");

        // Opcional: Limpiar el formulario
        formulario.reset();
    });
});
