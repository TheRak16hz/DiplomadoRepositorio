'''  Elabore un programa en Python que con el uso de funciones permita leer precio del
producto, cantidad a llevar del mismo, nombre del cliente y su numero de RIF. Calcular el
monto a cancelar por el cliente. Visualizar por pantalla los datos leídos y el monto
calculado (funciones: leer, calcular y mostrar)'''

def leer_datos():
    nombre = input("Ingrese el nombre del cliente: ")
    rif = input("Ingrese el número de RIF: ")
    precio = float(input("Ingrese el precio del producto: "))
    cantidad = int(input("Ingrese la cantidad a llevar: "))
    return nombre, rif, precio, cantidad

def calcular_monto(precio, cantidad):
    return precio * cantidad

def mostrar_resultados(nombre, rif, precio, cantidad, monto):
    print("--- Factura ---")
    print(f"Cliente: {nombre}")
    print(f"RIF: {rif}")
    print(f"Precio del producto: {precio}")
    print(f"Cantidad a llevar: {cantidad}")
    print(f"Monto a cancelar: {monto}")

res = "s"

while res.lower() == "s":
    nombre, rif, precio, cantidad = leer_datos()
    monto = calcular_monto(precio, cantidad)
    mostrar_resultados(nombre, rif, precio, cantidad, monto)
    
    res = input("Desea realizar otra compra? (s/n): ")