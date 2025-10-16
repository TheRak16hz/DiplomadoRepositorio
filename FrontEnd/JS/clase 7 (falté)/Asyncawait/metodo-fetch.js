fetch("http://127.0.0.1:5500/hola.jpg")
//crear el objeto response
.then(respuesta => {
    console.log(respuesta+'Soy el response');
    return respuesta.blob();
})

//crea el objeto de lo que viene de la URL
.then(respuesta2 =>{
    console.log(respuesta2);
    Imagen.src = URL.createObjectURL(respuesta2)
})

//exception si hay error
.catch(error =>{console.error(error)})