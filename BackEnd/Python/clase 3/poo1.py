#polimorfismo y herencia
class Persona:
    def __init__(self,nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def mostrar_informacion(self):
        return f"Nombre: {self.nombre}, Edad: {self.edad}"

class Cliente(Persona):
    def __init__(self, nombre, edad, numero_cliente):
        super().__init__(nombre, edad)
        self.numero_cliente = numero_cliente
        
    def mostrar_informacion(self):
        return f"{super().mostrar_informacion()}, Numero Cliente: {self.numero_cliente}"

class Empleado(Persona):
    def __init__(self, nombre, edad, puesto):
        super().__init__(nombre, edad)
        self.puesto = puesto
        
    def mostrar_informacion(self):
        return f"{super().mostrar_informacion()}, Puesto: {self.puesto}"
    
def mostrar_informacion_persona(persona):
    print(persona.mostrar_informacion())

####################################################


#crear instancias de Cliente y Empleado
cliente = Cliente("Ana", 30, "C123")
empleado = Empleado("Carlos", 45, "Gerente")

# print(cliente.mostrar_informacion())
# print(empleado.mostrar_informacion())

mostrar_informacion_persona(cliente)
mostrar_informacion_persona(empleado)

