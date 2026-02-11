dic = {
    "nombre": "RAK",
    "edad": 21,
    "correo": "sebas.elio2004@gmail.com",
    "inscrito": True
}

print(dic)

print(dic["nombre"])
print(dic.get("inscrito"))
dic['direccion'] = "capacho independencia"

dic["inscrito"] = False
print(dic)

#del dic["direccion"]
print(dic)
print(dic["nombre"])
print(dic["direccion"])
print(dic.get("edad"))
dic["direccion"] = "ferrero tamayo"

print(dic.get("direccion"))
print(dic)
del dic("direccion")
print(dic)

valor = "edad" in dic
if valor:
    print("existe")
else:
    print("no existe")


