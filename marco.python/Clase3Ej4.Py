#desarrollar un ejercicio para contar las vocales que hay en una cadena de caracteres
cont=0
indice=0
cadena="Curso-Basico-Python"
vocales="AaáEeéIiíOooUuú"
while indice<len(cadena):
    if cadena[indice] in vocales:
        cont+=1
    indice+=1
print(f"la cadena tiene {cont} vocales")

#2da parte
#desarrollar un programa para contar la cantidad de letras f que tenga una cadena de caracteres
cont=0
indice=0
cadena2="el rifle no funciona con facilidad"
letraf="Ff"
while indice<len (cadena2):
    #if cadena[indice]=="F" or cadena[indice]=="f":
    #if cadena[indice].lower()=="f":
    if cadena2[indice] in letraf:
        cont+=1
    indice+=1
print(f"la cadena tiene {cont} letras f")


        

        

