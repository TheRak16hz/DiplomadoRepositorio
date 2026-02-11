'''
Elabore un programa en Python que permita registrar las edades y los nombres de personas encuestadas, el almacenamiento debe realizarse en tuplas, mostrar por pantalla la edad mayor y la tuplas cargadas.
'''

nombres = ()
edades = ()

for i in range(5):
    nombre = input(f"Ingrese el nombre de la persona {i+1}: ")
    edad = int(input(f"Ingrese la edad de {nombre}: "))
    nombres += (nombre,)
    edades += (edad,)

mayor_edad = max(edades)
print(f"La edad mayor es: {mayor_edad}")

print("Tuplas cargadas:")
print("Nombres:", nombres)
print("Edades:", edades)
