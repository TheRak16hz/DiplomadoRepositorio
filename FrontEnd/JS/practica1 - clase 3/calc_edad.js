let edad = []
let x=0, s=0, n=0, p=0
n = prompt("ingrese la cantidad de personas")
n = parseInt(n)
for (x=0; x<n;x++) {
    edad[x] = prompt(`ingrese la edad de la persona ${x+1}: `)
}
document.write("las edades son <br>")

for (x=0;x<n;x++) {
    document.write(`persona ${x+1} tiene ${edad[x]} años <br>`)
    s=s+parseInt(edad[x])
}

p=parseInt(s)/parseInt(n)
document.write(`el promedio de las edades de las personas encuestadas es ${p.toFixed(2)}`)

