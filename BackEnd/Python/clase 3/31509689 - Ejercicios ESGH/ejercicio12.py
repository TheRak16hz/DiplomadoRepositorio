''' Escribe un programa que solicite al usuario ingresar cinco artículos para una lista de
compras. El programa debe almacenar los artículos en una lista y luego mostrar la lista
completa.'''

lista_compras = []

print("Ingresa 5 artículos: ")
for i in range(5):
    articulo = input(f"Artículo {i+1}: ")
    lista_compras.append(articulo)

print("Lista de compras:")
for articulo in lista_compras:
    print(f"- {articulo}")