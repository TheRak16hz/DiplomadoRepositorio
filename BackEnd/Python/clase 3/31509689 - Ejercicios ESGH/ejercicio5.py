'''
Elabore un programa en Python que permita registrar en una lista las notas finales de 26 estudiantes, calcular y mostrar por pantalla el promedio general de la sección.
'''

notas = []
x = 0
while x < 26:
    nota = float(input(f"Ingrese la nota final del estudiante {x+1}: "))
    if nota < 1 or nota > 20:
        print("Nota inválida. Por favor ingrese una nota entre 1 y 20.")
    else:
        x += 1
        notas.append(nota)

promedio = sum(notas) / len(notas)
print(f"El promedio general de la sección es: {promedio}")