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
    const regExpName = /^[a-zA-Z\s]+$/g
    let valida = regExpName.test(valorCampoNombre)
    if (!valida) {
        campoNombre.classList.add("invalida");
        campoNombre.nextElementSibling.classList.add("error");
        campoNombre.nextElementSibling.innerText = "nombre invalido (sin acentos ni caracteres especiales)";
    } else {
        campoNombre.classList.remove("invalida");
        campoNombre.nextElementSibling.classList.remove("error");
        campoNombre.nextElementSibling.innerText="";
    }
});

//validar direccion
const elementoDireccion = document.querySelector("[name=dir_cli]")


//validar correo
const elementoCorreo = document.querySelector("[name=cor_cli]");
elementoCorreo.addEventListener("blur", function(evento) {
    const CampoCorreo = evento.target;
    const valorCampoCorreo=evento.target.value

    if (valorCampoCorreo.length===0) {
        CampoCorreo.classList.add("invalida");
        CampoCorreo.nextElementSibling.classList.add("error");
        CampoCorreo.nextElementSibling.innerText = "valor agregado no es valido";
    } else {
        CampoCorreo.classList.remove("invalida");
        CampoCorreo.nextElementSibling.classList.remove("error");
        CampoCorreo.nextElementSibling.innerText="";
    }
});