''' Escribe un programa que solicite al usuario ingresar una lista de cinco números. El 
programa debe mostrar solo los números pares de la lista'''

numeros = []
print("Ingrese 5 números:")
for i in range(5):
    num = int(input(f"Número {i+1}: "))
    numeros.append(num)
print("\nNúmeros pares:")
for num in numeros:
    if num % 2 == 0:
        print(num)