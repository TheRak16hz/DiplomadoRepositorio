''' Escribe un programa que genere un número aleatorio entre 1 y 100. El usuario debe 
intentar adivinar el número, y el programa debe indicar si el número ingresado es mayor, 
menor o igual al número generado. (nota: se requiere importación de módulo random)'''

import random
numero = random.randint(1, 100)

res = 0
intentos = 0
print("adivina el número entre 1 y 100")
while res != numero:
    res = int(input(f"ingresa tu número: (intento {intentos+1}) "))
    intentos += 1
    if res < numero:
        print("el número es mayor")
    elif res > numero:
        print("el número es menor")
    else:
        print(f"¡Felicidades! Adivinaste el número en {intentos} intentos.")