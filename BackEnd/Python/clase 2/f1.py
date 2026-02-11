# print("hola")

# a = "sebas"
# print("hola ",a)

def saludo1():
    print("ey mi gente bendiciones la buena")

saludo1()


def salu2(nombre):
    print("un saludo a ", nombre)


nombre = input("ingresa tu nombre: ")
salu2(nombre)

def salu3(a,b):
    s = a * b
    return s

total = salu3(34,55)
print(total)