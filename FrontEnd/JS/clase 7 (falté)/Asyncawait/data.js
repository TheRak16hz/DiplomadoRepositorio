/*async function consu() {
    const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
    const arrgloJson = await respuesta.text();
    console.log(arrgloJson);
}
consu();*/
/*async function consu() {
    const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
    const arregloJson = await respuesta.text();
    console.log(JSON.parse(arregloJson));
}
consu();*/

/*async function consu() {
    const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
    const arregloJson = await respuesta.text();
    console.log(JSON.stringify(arregloJson));
}
consu();*/

/*async function consu() {
    const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
    const arrgloJson = await respuesta.json();
    console.log(arrgloJson);
}
consu();*/

/*async function consu() {
    const respuesta = await fetch('http://127.0.0.1:5500/data.json');
    const arrgloJson = await respuesta.json();
    console.log(arrgloJson.apellido);
}
consu();*/

/*async function consu() {
    const respuesta = await fetch('http://127.0.0.1:5500/data.json');
    const arrgloJson = await respuesta.json();
    console.log(arrgloJson.direccion.parroquia);
}
consu();*/

/*async function consu() {
    const respuesta = await fetch('http://127.0.0.1:5500/data.json');
    const arrgloJson = await respuesta.json();
    console.log(`ASIGNATURA NOTA\n`);
    arrgloJson.notas.forEach(element => {
        console.log(`${element.asignatura} ${element.nota}`);
    });
}
consu();*/

/*async function consu() {
    const respuesta = await fetch('http://127.0.0.1:5500/data.json');
    const arrgloJson = await respuesta.json();
    console.log(arrgloJson.direccion["casa"]);
}
consu();*/

async function consu() {
    const respuesta = await fetch('http://127.0.0.1:5500/data.json');
    const arregloJson = await respuesta.json();
    console.log(`direccion`);
    const direccion = arregloJson.direccion;
        direccion.forEach(element => {
            console.log(`${element.pais} ${element.estado} ${element.ciudad} ${element.parroquia} ${element.casa}`);
        });
}
consu();