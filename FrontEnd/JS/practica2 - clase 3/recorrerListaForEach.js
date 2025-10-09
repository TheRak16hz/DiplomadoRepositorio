let estructura = [
    {
        ci:12543234,
        nom: "carlos arturo",
        ape: "restrepo piñera",
        gen: "masculino",
        edad: 18
    },
    {
        ci: 34657889,
        nom: "martha carolina",
        ape: "zambrano urbina",
        gen: "femenino",
        edad: 15
    }
]

let x=0
let n=estructura.length

estructura.forEach((lista, index) => {
    console.log(`persona ${index+1}\n cedula: ${lista.ci}\n apellido: ${lista.ape}\n genero: ${lista.gen}\n edad: ${lista.edad}`)
})