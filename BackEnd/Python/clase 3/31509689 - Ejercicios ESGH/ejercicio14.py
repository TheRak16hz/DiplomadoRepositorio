''' Escribe un programa que solicite al usuario su edad y verifique si es mayor de edad (18 
años o más). El programa debe mostrar un mensaje indicando si el usuario es mayor de 
edad o no.'''

edad = int(input("Ingrese su edad: "))

if edad >= 18:
    print("Usted es mayor de edad.")
else:
    print("Usted NO es mayor de edad.")