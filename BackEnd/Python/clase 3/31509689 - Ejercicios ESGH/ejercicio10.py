'''
Escribe un programa que solicite al usuario dos números y compare si son iguales, si el primero es mayor que el segundo o si el segundo es mayor que el primero.
'''

n1 = float(input("Ingrese el primer número: "))
n2 = float(input("Ingrese el segundo número: "))

if n1 == n2:
    print("Los números son iguales.")
elif n1 > n2:
    print(f"El primer número ({n1}) es mayor que el segundo ({n2}).")
else:    print(f"El segundo número ({n2}) es mayor que el primer número ({n1}).")