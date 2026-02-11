#4) Elabore un Programa en Python que permita registrar un numero, verificar si el valor es par o impar y mostrar por pantalla el resultado.

num = int(input("ingrese un numero: "))

res = num % 2
print(res)

if res == 0:
    print("tu numero es par")
else: print("tu numero es impar")