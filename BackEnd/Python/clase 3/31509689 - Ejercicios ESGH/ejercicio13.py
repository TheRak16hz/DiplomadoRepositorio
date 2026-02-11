''' Escribe un programa que solicite al usuario ingresar cinco calificaciones. El programa debe
calcular y mostrar el promedio de las calificaciones'''

notas = []
print("Ingresa 5 calificaciones (0-20):")

for i in range(5):
    nota = float(input(f"Calificación {i+1}: "))
    notas.append(nota)
promedio = sum(notas) / len(notas)
print("\nCalificaciones ingresadas:", notas)
print(f"Promedio: {promedio:.2f}")