'''elabore un programa en python con el uso de funciones que permita solicitar nombre, apellidos, edad, nota de matematica, nota de fisica, nota de quimica, nota de programacion. calcule el promedio general. debe mostrarse por pantalla si el estudiante esta aprobado o reprobado, mas la nota promedio.'''


def entrada():
    print("* * * * * * * *")
    name=input("ingrese su nombre: ")
    ape=input("ingrese su apellido: ")
    age=int(input("ingrese su edad: "))
    n_mate=float(input("ingrese la nota de matematica: "))
    n_fis=float(input("ingrese la nota de fisica: "))
    n_qui=float(input("ingrese la nota de quimica: "))
    n_pro=float(input("ingrese la nota de programacion: "))
    return [name,ape,age,n_mate,n_fis,n_qui,n_pro]

def proceso(xent):
    suma = xent[3]+xent[4]+xent[5]+xent[6]
    prom = suma/4
    if (prom>=12):
        res="aprobado"
    else:
        res="reprobado"
    return prom, res

def salida(xent,xtotales):
    print("* * E S T U D I A N T E * *")
    print(f"estudiante: {xent[0]}")
    print(f"apellido: {xent[1]}")
    print(f"edad: {xent[2]}")
    print(f"* * N O T A S * *")
    print(f"matematica: {xent[3]}")
    print(f"fisica: {xent[4]}")
    print(f"quimica: {xent[5]}")
    print(f"programacion: {xent[6]}")
    print("* * T O T A L E S * *")
    print(f" promedio es {xtotales[0]}")
    print(f"el estudiante esta {xtotales[1]}")

x=1
while x == 1:
    print("* * SISTEMA DE CALCULO DE NOTAS EPICO  * *")
    ent=entrada()
    totales = proceso(ent)
    salida(ent, totales)
    x = int(input("desea agregar otro estudiante? (0=no, 1 = si): "))

print("fin del proceso..")

