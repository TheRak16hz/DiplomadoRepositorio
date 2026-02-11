# 3) Elabore un Programa en Python que le permita al usuarios cargar los siguientes datos: Rif, Apellidos, Nombres, Genero, Edad, Nota de Matemática, Nota de Física, Nota de Química y Nota de Programación. Calcular y mostrar por pantalla el promedio de notas del estudiante.

rif = input("ingrese su rif: ")
ape = input("ingrese sus apellidos: ")
name = input("ingrese sus nombres: ")
gen = input("ingrese su genero (F o M): ")
age = int(input("ingrese su edad: "))

nota_mat = int(input("ingrese su nota de matematica: "))
nota_fi = int(input("ingrese su nota de fisica: "))
nota_qui = int(input("ingrese su nota de quimica: "))
nota_pro = int(input("ingrese su nota de programacion: "))

list_notas = [nota_mat, nota_fi, nota_qui, nota_pro]
for i in list_notas:
    print(f"la nota  de matematica es: {i}")
    print(f"la nota  de fisica es: {i}")
    print(f"la nota  de quimica es: {i}")
    print(f"la nota  de programacion es: {i}")

promedio = (nota_mat + nota_fi + nota_pro + nota_qui) / 4

print(f"el promedio de las notas es: {promedio}")