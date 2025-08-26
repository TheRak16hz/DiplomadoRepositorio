#realizar un ejercicio que permita combinar 2 cadenas, eliminar las comas e imprimir la combinacion de las dos cadenas ordenadas alfabeticamnente
pares="0,2,4,6,8"
impares="1,3,5,7,9"
lista_pares=pares.split(",")
lista_impares=impares.split(",")
print(f"lista de pares: {lista_pares}")
print(f"lista de impares: {lista_impares}")
lista_combinada=lista_pares+lista_impares
print(f"lista combinada: {lista_combinada}")
lista_combinada.sort()
print(f"lista combinada ordenada: {lista_combinada}")

#segunda parte
frutas="lechoza,cambur,durazno,manzana,piña,patilla"
verduras="platano,yuca,ahuyama,ocumo,zanahoria"
lista_frutas=frutas.split(",")
lista_verduras=verduras.split(",")
print(f"lista de frutas: {lista_frutas}")
print(f"lista de verduras: {lista_verduras}")
lista_combinada=lista_frutas+lista_verduras
print(f"lista combinada: {lista_combinada}")
lista_combinada.sort()
print(f"lista combinada ordenada: {lista_combinada}")
