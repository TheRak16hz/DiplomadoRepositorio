'''
2) Elabore un programa en Python para leer el precio de un producto y la cantidad a llevar del mismo, calcular y mostrar por pantalla el monto que debe cancelar la persona si se aplican los siguientes descuentos:

a) Si lleva entre 1 y 10 se aplica un 5% de descuento
b) Si lleva mas de 10 y menos de 101 se aplica un descuento del 10%
c) Si lleva mas de 100 productos el descuento será de 25%
'''

cant = int(input("ingrese la cantidad de productos: "))
price = int(input("ingrese el precio de los productos: "))

if cant >= 1 and cant <= 10:
    porcent =  0.05
elif cant > 10 and cant < 101:
    procent = 0.10
elif cant > 100:
    porcent = 0.25
else:
    desc = 0

subtotal = cant * price
desc = subtotal * porcent
total = subtotal - desc

print(f"el subtotal es {subtotal}, y con descuento del {porcent*100}%: ")
print(f"el total queda en {total}")