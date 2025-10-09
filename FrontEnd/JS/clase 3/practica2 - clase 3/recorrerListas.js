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

for (x=0;x<n;x++) {
    console.log(`${estructura[x].ape}`)
    console.log(`${estructura[x].nom}`)
    console.log(`${estructura[x].gen}`)
}