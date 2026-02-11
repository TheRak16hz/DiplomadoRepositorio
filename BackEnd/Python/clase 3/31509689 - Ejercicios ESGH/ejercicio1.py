### 1) Elabore un programa en Python que permita leer el nombre, el año de nacimiento y el año actual de una persona. Calcular y mostrar por pantalla la edad aproximada de la persona y un mensaje que indique si es mayor o menor de edad.

from datetime import date

birth_day = input("ingrese su fecha de nacimiento (formato yyyy-mm-dd): ")

actualDate = str(date.today())
Year = int(actualDate[0:4])

hisYear = int(birth_day[0:4])

#calculo epico
actualYear = Year - hisYear

print(f"tienes aproximadamente {actualYear} años")

if (actualYear >= 18):
    print("Tu eres mayor de edad")
else:
    print("sigues siendo menor de edad")




