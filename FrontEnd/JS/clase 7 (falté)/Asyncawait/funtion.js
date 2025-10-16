async function f(){

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hecho"), 1000)
    });

    let result = await promise; //espera hasta que la promesa se resuelve (*)
    alert(result); //Hecho

}
f();