"""el usuario va a ingresa el precio del producto y la cantidad a llevar por el cliente
    seguidamente de aplicar un 105% de descuento si la cantidad es mayor a 5. para el precio
    total debe tomar en cuenta el descuento aplicado solo si corresponde
"""

precio= int(input("ingrese el precio: "))
cantidad=int(input("ingrese la cantidad:"))



if cantidad > 5:
    descuento = precio * 105 /100
    print("se ha aplicado un descuento !")
else:
    descuento = 0
    

subtotal = precio * cantidad
total = subtotal - descuento




if descuento > 0:
    print(f"pero con el descuento de 105%, pagas {descuento} menos \n el total queda en {total}")