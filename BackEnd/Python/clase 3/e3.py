# # n1=int(input("Ingrese un numero: "))
# # n2=int(input("Ingrese otro numero: "))

# # try:
# #     resultado=n1/n2
# #     print(f"{n1} entre {n2} es: {resultado}")
# # except ZeroDivisionError as ee:
# #     print(ee)

# n1=int(input("Ingrese un numero: "))
# n2=int(input("Ingrese otro numero: "))

# try:
#     resultado=n1/n2
#     print(f"{n1} entre {n2} es: {resultado}")
# except ZeroDivisionError as ee:
#     print(ee)
# else:
#     print("no se presentó ninguna excepción")


n1=int(input("Ingrese un numero: "))
n2=int(input("Ingrese otro numero: "))

try:
    resultado=n1/n2
    print(f"{n1} entre {n2} es: {resultado}")
except ZeroDivisionError as ee:
    print(ee)
else:
    print("no se presentó ninguna excepción")
finally:
    print("proceso culminado")
