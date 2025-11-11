const apiUrl = 'http://localhost:3000/ubicacion';

const elementoCodigo = document.querySelector("[name=cod_con]");
const elementoNombre = document.querySelector("[name=nom_con]");
const elementoDescripcion = document.querySelector("[name=des_con]");
const elementoEstatus = document.querySelector("[name=est_con]");
const formulario = document.querySelector("form");

// --- Función de Validación Común ---
/**
 * Realiza la validación de un campo de formulario.
 * @param {HTMLElement} campo - El elemento de entrada.
 * @param {string} mensajeError - Mensaje a mostrar si la validación falla.
 * @param {RegExp} [regex=null] - Expresión regular para validar el valor.
 * @param {boolean} [requerido=true] - Indica si el campo no puede estar vacío.
 * @returns {boolean} True si el campo es válido, False en caso contrario.
 */
function validaCampo(campo, mensajeError, regex = null, requerido = true) {
    const valorCampo = campo.value.trim();
    const spanError = campo.nextElementSibling;
    let esValido = true;
    let mensaje = "";

    // 1. Validar si es requerido y está vacío
    if (requerido && valorCampo.length === 0) {
        esValido = false;
        mensaje = "Este campo no puede estar vacío";
    } 
    // 2. Validar con RegExp, solo si pasa la validación de vacío
    else if (regex && !regex.test(valorCampo)) {
        esValido = false;
        mensaje = mensajeError;
    } 
    // 3. Validar el select de estatus
    else if (campo.name === 'est_con' && valorCampo === "") {
        esValido = false;
        mensaje = "Por favor, seleccione una opción";
    } else {
        mensaje = "";
    }

    // Aplicar estilos y mensajes
    if (esValido) {
        campo.classList.remove("invalida");
        spanError.classList.remove("error");
        spanError.innerText = "";
    } else {
        campo.classList.add("invalida");
        spanError.classList.add("error");
        spanError.innerText = mensaje;
    }

    return esValido;
}


// --- Lógica del Evento 'blur' ---
// Mantenemos la validación en blur, pero usamos la función refactorizada
elementoCodigo.addEventListener("blur", function (evento) {
    const campo = evento.target;
    const regExp = /^[0-9]+$/;
    // Si no está vacío, valida el regex. Si está vacío, validaCampoVacio lo maneja.
    validaCampo(campo, "El código debe contener solo números", regExp, true);
});

elementoNombre.addEventListener("blur", function (evento) {
    const campo = evento.target;
    const regExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    validaCampo(campo, "El nombre debe contener solo letras", regExp, true);
});

// El campo de descripción es opcional, solo le quitamos los mensajes/clases si tiene algo
elementoDescripcion.addEventListener("blur", function (evento) {
    const campo = evento.target;
    // Es opcional (requerido=false) y no tiene regex
    validaCampo(campo, "", null, false); 
});

elementoEstatus.addEventListener("blur", function (evento) {
    const campo = evento.target;
    // Para el select, la validación se hace dentro de validaCampo cuando el valor es ""
    validaCampo(campo, "Por favor, seleccione una opción", null, true); 
});


// --- Lógica del Evento 'submit' ---

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    // 1. Re-validar todos los campos para el envío del formulario
    const codigoRegExp = /^[0-9]+$/;
    const nombreRegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    // Usamos la función validaCampo para consolidar la lógica
    // Usamos el operador && para garantizar que todas las validaciones se ejecuten
    const codigoValido = validaCampo(elementoCodigo, "El código debe contener solo números", codigoRegExp, true);
    const nombreValido = validaCampo(elementoNombre, "El nombre debe contener solo letras", nombreRegExp, true);
    // Descripción es opcional, la validación devuelve true si no está vacía o si está vacía
    const descripcionValida = validaCampo(elementoDescripcion, "", null, false); 
    const estatusValido = validaCampo(elementoEstatus, "Por favor, seleccione una opción", null, true);

    // 2. Verificar si hay errores
    if (!codigoValido || !nombreValido || !estatusValido) {
        alert("Por favor, corrija los errores en el formulario antes de enviarlo");
        return;
    }

    // 3. Preparar y enviar los datos al backend (API)
    const datos = {
        cod_con: elementoCodigo.value.trim(),
        nom_con: elementoNombre.value.trim(),
        des_con: elementoDescripcion.value.trim(),
        est_con: elementoEstatus.value
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        // Manejo de la respuesta
        if (response.ok) {
            alert("Continente agregado exitosamente");
            // Opcional: limpiar el formulario después del éxito
            formulario.reset(); 
        } else {
            // Manejo de errores del servidor (ej. código duplicado)
            const errorText = await response.text();
            alert(`Error al agregar el continente: ${errorText}`);
            console.error('Error del servidor:', errorText);
        }
    } catch (error) {
        console.error('Error de conexión o de red:', error);
        alert("Ocurrió un error al intentar conectar con el servidor.");
    }
});