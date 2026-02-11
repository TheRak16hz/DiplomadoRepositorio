'''
Elabore un programa en Python que permita registrar en diccionario el sueldo neto de 6
personas, calcular el monto total de la nomina de la empresa
'''

sueldos = {}


for i in range(6):
    nombre = input(f"Ingrese el nombre de la persona {i+1}: ")
    sueldo = float(input(f"Ingrese el sueldo neto de {nombre}: "))
    sueldos[nombre] = sueldo
    
total_nomina = sum(sueldos.values())

print("Diccionario de sueldos:")
for nombre, sueldo in sueldos.items():
    print(f"{nombre}: {sueldo}")

print(f"Monto total de la nómina: {total_nomina}")