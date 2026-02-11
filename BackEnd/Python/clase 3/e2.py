# n1=(input("Ingrese un numero: "))
# n2=(input("Ingrese otro numero: "))

# #se manejan exepciones pero sigue dando valueError si se ingresa un string
# try:
#     resultado=n1/n2
#     print(f"{n1} entre {n2} es: {resultado}")
# except:
#     print("Excepcion, 'el segundo valor debe ser diferente de cero'")


n1=int(input("Ingrese un numero: "))
n2=int(input("Ingrese otro numero: "))
1
#si se quita el int, ahora puede dar typeError
try:
    resultado=n1/n2
    print(f"{n1} entre {n2} es: {resultado}")
except ZeroDivisionError:
    print("Excepcion, 'el segundo valor debe ser diferente de cero'")


