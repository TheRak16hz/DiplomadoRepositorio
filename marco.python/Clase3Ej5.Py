#desarrollar un programa que permita solicitar al usuario el ingreso de numeros decimales, el proceso debe terminar cuando el usuario ingrese el numero 0 al finalizar el ingreso de los numeros se debe imprimir el total de los numeros ingresados, la cantidad de numeros ingresados y el numero mayor ingresado
cont=0
suma=0
while True:
    try:
        numero=float(input("ingrese un numero(0 para finalizar):"))
        if numero==0:
            break
        cont+=1 #cuento in numero ingresado
        suma+=numero #sumo el numero ingresado
    except ValueError:
        print("debe ingresar un numero, no texto.")
if cont==0:
    print("no se ha registrado ningun numero.")
else:
    print(f"la cantidad de numeros ingresados es: {cont}")
    print(f"la suma total de los numeros ingresados es: {suma}")
    print(f"el promedio  de los numeros ingresados es: {suma/cont}")