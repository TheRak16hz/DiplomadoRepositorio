#elaborar un programa que permita registrar los empleados de una empresa solicitando para cada uno de ellos los siguientes datos: nombre, apellido, cedula, salario, edad y genero. Al finalizar se debe determinar el salario mas alto, el salaria mas bajo, el promedio de las edades de los empleados, la cantidad de hombres y la cantidad de mujeres.
conth=0
contm=0
suma_edad=0
cont=0
mayor=0
menor=5001
while True:
    try:
        res=input("desea registrar un empleado? (si-no)")
        if res.upper()=="SI" or res.upper()=="NO":
            break
    except ValueError:
        print("debe ingresar solo SI o NO")
#fin del ciclo de validacion
#inicio del ciclo de carga de los datos
while res.upper()=="SI":
    nombre=input("ingrese el nombre del empleado:")
    apellido=input("ingrese el apellido del empleado:")
    cedula=input("ingrese el cedula del empleado:")
    edad=int(input("ingrese el edad del empleado:"))
    salario=float(input("ingrese el salario del empleado:"))
    genero=input("ingrese el genero del empleado:")
    #contadores de h y m
    if genero.lower()=="m":
        conth+=1
    if genero.lower()=="f":
        contm+=1
#trabajar en promedio de las edades
    cont+=1
    suma_edad+=edad
    #hallar el menor salario
    if salario<menor:
        menor=menor
    #hallar el mayor salrio
    if salario>mayor:
        mayor=mayor
    while True:
        try:
            res=input("desea registrar otro empleado? (si-no)")
            if res.upper()=="SI" or res.upper()=="NO":
                break
        except ValueError:
            print("debe ingresar solo SI o NO")
    #fin del ciclo de validacion
if cont==0:
    print("no se ha registrado ningun empleado.")
else:
    print(f"la cantidad de hombre refistados es: {conth}")  
    print(f"la cantidad de mujeres refistados es: {contm}") 
    print(f"el promedio de las edades de los empleados es: {suma_edad/cont}") 
    print(f"el mayor salario es: { mayor}")
    print(f"el menor salario es. {menor}")
    