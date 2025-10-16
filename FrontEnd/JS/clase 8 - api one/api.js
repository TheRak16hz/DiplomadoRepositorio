console.log("mensaje desde la consola antes de la API")
let rutaApi = 'https://dog.ceo/api/breeds/image/random';

fetch(rutaApi)
.then(respu => respu.json())
.then(datos => {
    console.log(datos.message); //la url de la imagen
    const matacho = document.querySelector('img'); // objetc htmlimage
    matacho.src=datos.message; //src es url local, .message es la url de la api
})

.catch(error => {console.error('Atencion '+ error)})