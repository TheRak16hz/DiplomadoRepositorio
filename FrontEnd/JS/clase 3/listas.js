let estructura=[
    {ci:31509689,
    nom:"Elio Sebastian",
    ape:"Gutierrez Hernandez",
    gen:"Masculino",
    eda:21},

    {ci:29699936,
    nom:"Manuel Alejandro",
    ape:"Zambrano Ruiz",
    gen:"Masculino",
    eda:23},

    {ci:28228173,
    nom:"alexandra sairi",
    ape:"alvarez zambrano",
    gen:"femenino",
    eda:23},

    {ci:32901095,
    nom:"Alejandro José",
    ape:"Moncada Torres",
    gen:"Masculino",
    eda:16},

    {ci:29699306,
    nom:"Emmanuel",
    ape:"Moreno Labrador",
    gen:"Masculino",
    eda:22},

    {ci:30853439,
    nom:"Jesus Andres",
    ape:"Villamizar Ramirez",
    gen:"Masculino",
    eda:"20"},

    {ci:30625952,
    nom:"Nelso Neptali",
    ape:"Moreno Mendez",
    gen:"Masculino",
    eda:21},

    {ci:30651060,
    nom:"Aaron Abisaid",
    ape:"Jimenez Leal",
    gen:"Masculino",
    eda:"20"},

    {ci:31045541,
    nom:"Javier Alejandro",
    ape:"Zambrano Herrera",
    gen:"Masculino",
    eda:19},

    {ci:31137433,
    nom:"David Josue",
    ape:"Gamboa Sandia",
    gen:"Masculino",
    eda:19},

    {ci:32932041,
    nom:"Jesús Andres",
    ape:"Carrero Colmenares",
    gen:"Masculino",
    eda:17},

    {ci:28271550,
    nom:"Yanis Mariel",
    ape:"Monzon Villamizar",
    gen:"Femenino",
    eda:23},

    {ci:31668285,
    nom:"Carlos Daniel",
    ape:"Moncada Carrero",
    gen:"Masculino",
    edad:19},

    {ci:31419315,
    nom:"Hayli marlicet",
    ape:"martinez rodriguez",
    gen:"femenino",
    edad:19},

    {ci:31890411,
    nom:"Greykell Antonio",
    ape:"Zambrano Diaz",
    gen:"Masculino",
    eda:19},
];

let x=0
let n=estructura.length;

/*for (x=0;x<n;x++) {
    console.log(estructura[x].ape)
    console.log(estructura[x].nom)
    console.log(estructura[x].gen)
}*/

estructura.forEach((lista, index) => {
    console.log(`Persona ${index+1}\n CI: ${lista.ci}\n Apellido: ${lista.ape}\n Genero: ${lista.gen}\n edad: ${lista.eda}\n`)
})