const fs=require('fs')

fs.appendFile("index.html", "<p>hola</p>", (err) => {
    if (err) {
        throw err;
    }
    console.log("archivo actualizado!");
})