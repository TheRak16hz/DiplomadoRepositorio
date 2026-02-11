
'''
Escribe un programa que solicite al usuario su año de nacimiento y el año actual. El programa debe calcular y mostrar la edad del usuario.
'''

fecha_nacimiento = int(input("Ingrese su año de nacimiento: "))
fecha_actual = int(input("Ingrese el año actual: "))

edad = fecha_actual - fecha_nacimiento

print(f"Su edad es: {edad} años")